CREATE TABLE new_pdd_with_changed
(
  logo text,
  title text
);

INSERT INTO new_pdd_with_changed(logo, title)
VALUES (
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAPCAYAAAAVk7TYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzcxNTcxMDU1RTZGMTFFNzk1QUQ4ODFBNjdGMjA3QzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzcxNTcxMDY1RTZGMTFFNzk1QUQ4ODFBNjdGMjA3QzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNzE1NzEwMzVFNkYxMUU3OTVBRDg4MUE2N0YyMDdDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNzE1NzEwNDVFNkYxMUU3OTVBRDg4MUE2N0YyMDdDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pql+GTMAAAGSSURBVHjanJQ/SwNBEMXvNqdFVFJovoVVilQhaCBVojZpJIiVEIKFRTqx8gsIagTFQkxpo9hFYpEqjRZpYzoLwUpBUfHPezCBY9jL3bnwu2Vn3sy7zW7O3T88rjiO0wRJsAd2wK8TcWzWN6zxg+aJi2kXbIE3UPfwOAJzotkGs0zEMQww4gZqEpqij8HDU1oKzkDin0YJqa+plEezhqVmDZyDyZhG1LekXo8Gd3UKPuRtjC+5CqYBz/QzotEFWFKpH7COs22NmvNtquBLCVl4LZdnnFFSdNqI/ao04sLFbfQnl+XtJlTRLVgBrxavGXAJFi1GFRhdjQJGCZgogXcVZ6MbkFLxlMS1EetLfiObGUcblC27yIIOSMs6Leus0rGuDKO2bmwCjoFNiuBFxTOSm5c5o/LUF2HUsTU1Y869Jz/Ps4rTqC+zf1C3AKNeUEMTcqPvQAE8heiYL8DofpzIRPivchc58BiQZzwHo35YIxPx4zAAefCg4lznYTSI0sTE+BoNeSagC75l5hkNozb4E2AARQZmQ05WnqoAAAAASUVORK5CYII=',
  'Новые ПДД с изменениями от 25 июля 2017 года'
);

-- -- -- -- -- -- -- -- -- --

CREATE SEQUENCE new_pdd_with_changed_category_ids;
CREATE TABLE new_pdd_with_changed_category
(
  id INTEGER PRIMARY KEY DEFAULT NEXTVAL('new_pdd_with_changed_category_ids'),
  title text
);

-- -- -- -- -- -- -- -- -- --

INSERT INTO new_pdd_with_changed_category(title)
VALUES ('Изменение правил в пункте 1.1');

INSERT INTO new_pdd_with_changed_category(title)
VALUES ('Изменение правил в пункте 1.2');

INSERT INTO new_pdd_with_changed_category(title)
VALUES ('Изменение правил в пункте 1.3');

-- -- -- -- -- -- -- -- -- --

CREATE SEQUENCE new_pdd_with_changed_text_ids;
CREATE TABLE new_pdd_with_changed_text
(
  id INTEGER DEFAULT NEXTVAL('new_pdd_with_changed_text_ids'),
  category_id INTEGER not null REFERENCES new_pdd_with_changed_category (id),
  text text
);

-- -- -- -- -- -- -- -- -- --

INSERT INTO new_pdd_with_changed_text(category_id, text)
VALUES (1, 'Первая правка 1.0');

INSERT INTO new_pdd_with_changed_text(category_id, text)
VALUES (1, 'Первая правка 1.1');

INSERT INTO new_pdd_with_changed_text(category_id, text)
VALUES (2, 'Вторая правка 2.0');

INSERT INTO new_pdd_with_changed_text(category_id, text)
VALUES (2, 'Вторая правка 2.1');

INSERT INTO new_pdd_with_changed_text(category_id, text)
VALUES (3, 'Третья правка 3.0');

INSERT INTO new_pdd_with_changed_text(category_id, text)
VALUES (3, 'Третья правка 3.1');
