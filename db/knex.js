const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile")[environment];
var knex = require("knex")(config);

var KnexQueryBuilder = require("knex/lib/query/builder");

KnexQueryBuilder.prototype.paginate = function(per_page, current_page) {
  var pagination = {};
  var per_page = per_page || 10;
  var page = current_page || 1;
  if (page < 1) page = 1;
  var offset = (page - 1) * per_page;
  return Promise.all([
    this.clone()
      .count("* as count")
      .first(),
    this.offset(offset).limit(per_page)
  ]).then(([total, rows]) => {
    var count = total.count;
    var rows = rows;
    pagination.total = count;
    pagination.per_page = per_page;
    pagination.offset = offset;
    pagination.to = offset + rows.length;
    pagination.current_page = page;
    pagination.last_page = Math.ceil(count / per_page);
    pagination.data = rows;
    return pagination;
  });
};

knex.queryBuilder = function() {
  return new KnexQueryBuilder(knex.client);
};

module.exports = knex;
