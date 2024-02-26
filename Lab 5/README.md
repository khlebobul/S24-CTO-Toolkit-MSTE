# Lab 5 | SQL Basics 

### Filtering is required to unload data not entirely, but only under certain conditions.

To display specific fields, they need to be listed after `SELECT` separated by commas.

Copy the SQL code

```sql
-- select specific fields from the tableSELECT field_1,
       field_2,
       field_3 ...
FROM table;

```

To display the required number of rows, use `LIMIT` and `OFFSET` operators. `LIMIT` unloads the required number of rows, and `OFFSET` skips their specified number.

Copy the SQL code

```sql
-- select specific rows from the tableSELECT *
FROM table
LIMIT number of rows to download OFFSET number of rows to skip;

```

To unload data under a specific condition, it needs to be written after the `WHERE` operator.

Copy the SQL code

```sql
-- data filtering by conditionSELECT field_1,
       field_2-- field selectionFROM table-- the table from which the data is unloadedWHERE condition;-- condition for data slice

```

Mathematical operators are used for comparison:

- `>` — greater than;
- `<` — less than;
- `>=` — greater than or equal to;
- `<=` — less than or equal to;
- `=` — equal to;
- `!=` — not equal to.

The logical operators `OR`, `AND` and `NOT` are used to combine conditions:

- The `OR` operator will work if at least one condition is met.
- The `AND` operator will work if all specified conditions are met.
- The `NOT` operator changes the condition to the opposite.

Copy the SQL code

```sql
-- data filtering by conditionSELECT field_1,
       field_2-- field selectionFROM table-- the table from which the data is unloadedWHERE condition_1 OR condition_2 AND NOT condition_3;-- conditions for data slice

```

A set of `OR` operators can be replaced with a construction with the `IN` operator:

Copy the SQL code

```sql
-- filtering where all field values are in the listSELECT *
FROM table
WHERE field IN ('value_1','value_2','value_3');

```

The number of a date element (year, month, week) can be highlighted using the `EXTRACT` operator:

Copy the SQL code

```sql
-- extracting part of the dateSELECT EXTRACT(part_of_date FROM field) AS new_field_with_date
FROM table;

```

The beginning of a date element (for example, the first day of the required month) can be highlighted using `DATE_TRUNC`:

Copy the SQL code

```sql
-- truncating the date to partSELECT DATE_TRUNC('part_of_date_to_truncate', field) AS new_field_with_date
FROM table;

```

Parameters of the `DATE_TRUNC` function:

- `'microseconds'` — microseconds;
- `'milliseconds'` — milliseconds;
- `'second'` — second;
- `'minute'` — minute;
- `'hour'` — hour;
- `'day'` — day;
- `'week'` — week;
- `'month'` — month;
- `'quarter'` — quarter;
- `'year'` — year;
- `'decade'` — decade;
- `'century'` — century.

Parameters of the `EXTRACT` function:

- `MILLISECOND` — millisecond;
- `SECOND` — second;
- `MINUTE` — minute;
- `HOUR` — hour;
- `DAY` — day;
- `DOY` — day of the year, expressed
in numbers from 1 to 365 or 366, if
it is a leap year;
- `DOW` — day of the week, expressed
in numbers from 0 to 6, where Monday
is 1, Sunday is 0;
- `ISODOW` — day of the week,
expressed in numbers from 1 to 7, where
Monday is 1, Sunday is
7;
- `WEEK` — week of the year;
- `MONTH` — month;
- `QUARTER` — quarter;
- `YEAR` — year;
- `CENTURY` — century.

Aggregating functions are used to perform operations on the data contained in a field.

Copy the SQL code

```sql
SELECT
COUNT(*),-- returns the number of records in the tableCOUNT(column),-- returns the number of records in the column fieldCOUNT(DISTINCT column),
/* returns the number of unique values
in the column field */SUM(column),-- sum of values in the fieldAVG(column),-- average of values in the fieldMIN(column),-- minimum of values in the fieldMAX(column)-- maximum of values in the fieldFROM table;

```

### Grouping is used to calculate aggregations for a field based on parameters represented in other fields.

Copy the SQL code

```sql
-- grouping dataSELECT field_1,
       field_2,
       field_3,
       AGGREGATE_FUNCTION(field)
FROM table
GROUP BY field_1,
         field_2,
         field_3;
-- IMPORTANT! The number of non-aggregated fields in SELECT should be the same as in GROUP BY

```

Data in tables can be sorted. Numerical data and dates are sorted in descending and ascending order, while strings are sorted in alphabetical order and vice versa.

Copy the SQL code

```sql
-- sorting dataSELECT field_1,
       field_2,
       field_3,
       AGGREGATE_FUNCTION(field)
FROM table
ORDER BY field_1,-- sorting in ascending order
         field_2 DESC,-- sorting in descending order
         field_3 ASC;-- sorting in ascending order

```

The `HAVING` operator is an analogue of `WHERE`, which is used to filter data after grouping and aggregation.

Copy the SQL code

```sql
-- filtering after groupingSELECT field_1, field_2, field_3, AGGREGATE_FUNCTION(field)
FROM table
GROUP BY field_1
HAVING AGGREGATE_FUNCTION(field) > n;
*- IMPORTANT! WHERE only works with original data, - HAVING — only with aggregated*`

```