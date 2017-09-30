DROP TABLE IF EXISTS pdd;
DROP TABLE IF EXISTS pdd_text;
DROP TABLE IF EXISTS pdd_category;

DROP SEQUENCE IF EXISTS pdd_category_ids;
DROP SEQUENCE IF EXISTS pdd_text_ids;

CREATE TABLE pdd(
  header VARCHAR(256),
  title VARCHAR(256),
  text TEXT,
  image TEXT
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Общие положения',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Общие обязанности водителей',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Применение специальных сигналов',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Обязанности пешеходов',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Обязанности пассажиров',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Сигналы светофора и регулировщика',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Применение аварийной сигнализации и знака аварийной остановки',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Начало движения, маневрирование',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Расположение транспортных средств на проезжей части',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Скорость движения',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Обгон, опережение, встречный разъезд',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Остановка и стоянка',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Проезд перекрестков',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Пешеходные переходы и места остановок маршрутных транспортных средств',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Движение через железнодорожные пути',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Движение по автомагистралям',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Движение в жилых зонах',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Приоритет маршрутных транспортных средств',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Пользование внешними световыми приборами и звуковыми сигналами',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Буксировка механических транспортных средств',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Учебная езда',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Перевозка людей',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Перевозка грузов',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Дополнительные требования к движению велосипедистов и водителей мопедов',
  'title',
  'text',
  'image'
);

INSERT INTO pdd (header, title, text, image)
VALUES (
  'Дополнительные требования к движению гужевых повозок, а также к прогону животных',
  'title',
  'text',
  'image'
);

