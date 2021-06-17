// 1
// SELECT date as Day, 
// SUM(case when score > 0 then 1 else 0 end) as num_pos_scores,
// SUM(case when score < 0 then 1 else 0 end) as num_neg_scores
// FROM "assessments" where date between '2011-03-01' and '2011-04-30' group by date;


// 2
// CREATE TEMP TABLE tempTable AS
// SELECT date as Day, 
// SUM(case when score > 0 then 1 else 0 end) as num_pos_scores,
// SUM(case when score < 0 then 1 else 0 end) as num_neg_scores
// FROM "assessments" where date between '2011-01-01' and '2011-06-30' group by date;

// SELECT Day FROM tempTable where num_neg_scores != 0

