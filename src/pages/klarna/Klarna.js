import React from 'react';
import klarna from './images/klarna.png';
import styles from './Klarna.module.css';
import Card from "./components/Card";

const europeMetrics = [
  {
    header: "54%",
    text: "E-commerce рынка Скандинавских стран"
  },
  {
    header: "23%",
    text: "E-commerce рынка Германии"
  },
  {
    header: "€6 млрд",
    text: "Общий объем депозитов"
  },
  {
    header: "40%",
    text: "CAGR роста выручки в Скандинавских и немецкоговорящих странах за последние 10 лет"
  },
]

const usaMetrics = [
  {
    header: "$2.6 млрд",
    text: "Gross merchandise volume за 2020 год в США"
  },
  {
    header: "3x",
    text: "Рост GMV в США в2021 году относительно 2020"
  },
  {
    header: "25 млн",
    text: "Активных пользователей (71% рост год к году)"
  },
  {
    header: "Top 10",
    text: "Приложение для покупок в США"
  },
]

const Klarna = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img alt='logo' src={klarna}/>
      </div>
      <ul className={styles.list}>
        <li>
          <h3 className={styles.title1}>
            $3.7B
          </h3>
          <div>
            инвестиций
          </div>
        </li>
        <li>
          <h3 className={styles.title1}>
            $45.6B
          </h3>
          <div>
            оценка последнего раунда
          </div>
        </li>
        <li>
          <h3 className={styles.title1}>
            4Q2022-4Q2023
          </h3>
          <div>
            прогнозная дата IPO
          </div>
        </li>
        <li>
          <h3 className={styles.title1}>
            $1.9B
          </h3>
          <div>
            выручка за 2021 (54% YoY Growth)
          </div>
        </li>
      </ul>
      <p>
        <strong>Klarna –</strong> разработчик платформы для обработки онлайн платежей, созданная для фасилитирования
        безналичных платежей с рассрочкой. Платформа используется для мобильных, онлайн и in-store платежей и
        работает по модели ”buy now pay later” (BNPL), позволяя потребителям производить оплату товаров
        несколькими равными частями (в рассрочку или кредит) или через 30 дней.
        <br/> <br/>
        Klarna интегрируется с мерчантами, которые предлагают Klarna как один из методов оплаты товаров.
        Потребители могут установить приложение Klarna для оплаты товаров с любого ecommerce сайта либо поиска
        мерчанта, подключенного к Klarna, и оплаты товаров.
        <br/> <br/>
        Дебетовая карта Klarna позволяет оплачивать любые покупки сразу, в рассрочку или кредит и может быть
        выпущена в 182 странах. Уже выпущено более 500 млн карт;
        <br/> <br/>
        Klarna обладает банковской лицензией шведского регулятора и предоставляет банковские сервисы через
        цифровые каналы в Германии и Швеции, а также планирует расширять географию банковских сервисов (в ЕС
        не требуется получать дополнительные лицензии);
        <br/> <br/>
        Klarna – крупнейший необанк в мире, работающий на 3 континентах, 45 странах. В 2021 Klarna запустилась
        на 5 новых рынках: Франция, Новая Зеландия, Польша, Ирландия, Португалия. В феврале 2022 года Klarna
        объявила о запуске в Канаде. 147 млн активных пользователей (69% YoY), более 400 тыс. глобальных розничных
        партнеров. Klarna заключила партнерство с 30 из 100 крупнейших ритейлеров США.
        <br/> <br/>
        Финансовый superapp – единое приложение для шоппинга (где потребители ищут товары), планирования
        финансов и накопления денежных средств.
        <br/> <br/>
        В июле 2021 Klarna приобрела Stocard, немецкий discount shopping app, за $134M. Благодаря приобретению
        Stocard Klarna добавила клиентов в 25 новых странах -> на конец 2021 сервисы Klarna доступны в 45 странах
        (рост 125% YoY).
      </p>
      <h2>Klarna – экспоненциальный рост в США и доминирование в Европе</h2>
      <Card header={'Доминирование в Европе'} metrics={europeMetrics}/>
      <Card header={'Экспоненциальный рост в США'} metrics={usaMetrics}/>
      <div className={styles.list1}>
        <div>
          42% рост GMV в мире за 2021 г
        </div>
        <div>
          Прогноз компании на следующие 3-5 лет
        </div>
        <div>
          <h3 className={styles.title1}>
            40%+
          </h3>
          Рост GMV в Европе
        </div>
        <div>
          <h3 className={styles.title1}>
            200%
          </h3>
          Рост GMV в США
        </div>
      </div>
    </div>
  );
};

export default Klarna;