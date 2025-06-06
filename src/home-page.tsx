import React from 'react';

const tableData = [
  {
    concept: 'MVU (Model-View-Update)',
    description:
      'Упрощённая архитектура: представление напрямую вызывает обновление состояния',
    recommended: 'Прототипы, малые и средние SPA',
    notRecommended: 'Крупные системы с масштабируемой логикой',
    examples: 'Лендинг, одностраничный виджет',
  },
  {
    concept: 'Flux',
    description: 'Однонаправленный поток данных, централизованное хранилище',
    recommended: 'Крупные приложения с высокой сложностью',
    notRecommended: 'Прототипы, малые приложения',
    examples: 'CRM, корпоративные порталы',
  },
  {
    concept: 'Реактивная архитектура',
    description: 'Автоматическое обновление UI',
    recommended: 'Интерактивные приложения со сложным UI',
    notRecommended: 'Приложения с жёсткими требованиями к стабильности',
    examples: 'Чат, дашборд, график',
  },
  {
    concept: 'Flux + Event Sourcing',
    description: 'История изменений через события',
    recommended: 'Аналитические системы, журналы действий',
    notRecommended: 'Простые интерфейсы',
    examples: 'CRM, таск-трекер, бухгалтерия',
  },
  {
    concept: 'FRP',
    description: 'Потоковые данные и декларативная логика',
    recommended: 'Real-time интерфейсы, игры',
    notRecommended: 'Формы и панели администрирования',
    examples: 'Онлайн-игра, медиаплатформа',
  },
  {
    concept: 'Неявная ленивая подписка',
    description: 'Компоненты подписываются на данные при обращении',
    recommended: 'Производительные интерфейсы со средней нагрузкой',
    notRecommended: 'Сложные формы и структуры',
    examples: 'SPA с условным рендером',
  },
  {
    concept: 'Явная подписка',
    description: 'Ручное управление подписками',
    recommended: 'Крупные проекты с высокой ответственностью',
    notRecommended: 'Малые проекты',
    examples: 'Банковское ПО, сложные интерфейсы',
  },
  {
    concept: 'Иммутабельное состояние',
    description: 'Изменения только через копирование',
    recommended: 'Отладка, undo/redo, история',
    notRecommended: 'Высокочастотные обновления',
    examples: 'Графический редактор, текстовый редактор',
  },
  {
    concept: 'Мутабельное состояние',
    description: 'Прямое изменение данных',
    recommended: 'Быстрые визуализации, простой UI',
    notRecommended: 'Масштабируемые приложения',
    examples: 'Онлайн-таблица, калькулятор',
  },
  {
    concept: 'Нормализованное хранилище',
    description: 'Связанные сущности и ссылки',
    recommended: 'Большие системы с данными',
    notRecommended: 'Простые или короткоживущие проекты',
    examples: 'ERP, e-commerce каталог',
  },
  {
    concept: 'Ненормализованное хранилище',
    description: 'Вложенные структуры без связей',
    recommended: 'Быстрая разработка',
    notRecommended: 'Сложные взаимосвязанные данные',
    examples: 'Форма обратной связи, опросник',
  },
  {
    concept: 'HOC / селекторы',
    description: 'Оптимизация ререндеров, избирательность',
    recommended: 'Средние и крупные SPA',
    notRecommended: 'Малые интерфейсы',
    examples: 'CMS, CRM, интерактивный UI',
  },
  {
    concept: 'Много хранилищ',
    description: 'Разделение по модулям/доменам',
    recommended: 'Микрофронтенды, модульные приложения',
    notRecommended: 'Нужен строгий контроль глобального состояния',
    examples: 'Дашборд аналитики, marketplace',
  },
  {
    concept: 'Одно хранилище',
    description: 'Централизованное состояние',
    recommended: 'Единая бизнес-логика',
    notRecommended: 'Сильно изолированные модули',
    examples: 'Приложение с глобальной авторизацией и ролями',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">
        Рекомендации по выбору концепции управления состоянием
      </h1>

      <p className="paragraph">
        Рекомендуется использовать библиотеки Zustand и Effector, так как они
        являются самыми быстродействующими из исследуемых библиотек и используют
        мало памяти, а также обладают приемлемым размером бандла и требуют
        меньших трудозатрат на разработку.
      </p>
      <p className="paragraph">
        Redux рекомендуется использовать при разработке средних и больших
        проектов, так как он имеет явно прослеживаемую, наглядную цепочку
        управления состоянием и отличную поддержку сообщества, хорошую
        документацию, хотя стейт-менеджер показал средние результаты по объему
        затрачиваемой памяти и умеренное быстродействие. Количество строк кода
        большое в виду шаблонности, но на больших проектах в прочих решениях
        количество строк кода, в виду отсутствия шаблонности, возможно,
        сопоставимо.
      </p>
      <p className="paragraph">
        Стейт-менеджер MobX рекомендуется использовать по своему усмотрению,
        результаты его работы показали средние метрики по сравнению с прочими
        решениями для управления состоянием, однако для его использования нужно
        написать меньше всего кода, что делает его достаточно простым в
        использовании.
      </p>
      <p className="paragraph">
        Встроенные инструменты для управления состоянием приложения – React
        Hooks и Context показали удовлетворительные результаты по метрикам.
        Встроенные решения для управления состоянием в React являются не
        оптимальным решением.
      </p>
      <p className="paragraph">
        Storeon не рекомендуется к использованию, так как это решение показало
        худшую производительность и использует много памяти, а также требует
        написания большего количества строк кода по сравнению с другими
        решениями.
      </p>
      <p className="paragraph">
        Решения с реактивными паттернами (например, MobX и Effector) обычно
        обеспечивают более удобное и автоматизированное обновление UI за счёт
        наблюдателей и реактивных подписок. Однако это может приводить к
        увеличению размера бандла. Если приоритетом является предсказуемость и
        строгий контроль над изменениями, лучше выбирать архитектуры на основе
        Flux. Если важна гибкость и простота обновления, следует обратить
        внимание на решения с реактивными паттернами или MVU (Zustand, React
        Hooks + Context). В проектах, где критичны размеры финального продукта и
        быстродействие, оптимальным выбором окажутся легковесные решения
        (например, Zustand), особенно если состояние несложное. Для крупных и
        сложных проектов, требующих строгой организации и централизованного
        контроля, Redux может быть лучшим выбором, несмотря на свои недостатки в
        размере и сложности кода.
      </p>
      <p className="paragraph">
        Подход с нормализацией лучше подходит для проектов с обширными
        взаимосвязанными данными, где важна целостность состояния и удобство
        масштабирования (например, большие корпоративные приложения или системы
        с частыми обновлениями). Ненормализованное хранение данных подходит для
        небольших и средних приложений, где структура состояния не слишком
        сложная. Такой подход позволяет быстрее реализовывать и поддерживать
        логику обновлений за счёт автоматической реактивности, хотя может
        возникнуть риск дублирования данных в сложных системах.
      </p>
      <p className="paragraph">
        Использование селекторов рекомендуется для приложений с интенсивными
        обновлениями UI, где важно минимизировать избыточные ре-рендеры. Он
        обеспечивает масштабируемость и поддерживает разделение ответственности
        между слоями. Подход с HOC в свою очередь рекомендуется использовать в
        динамичных приложениях с частыми изменениями состояния, где удобство и
        автоматизация обновлений важнее явного контроля. Однако при сложной
        логике следует уделить внимание отладке и отслеживанию зависимостей.
        Использование нативных механизмов подходит для небольших проектов или
        модулей, где количество и сложность состояния невелики. При переходе к
        более крупным приложениям может потребоваться оптимизация.
      </p>
      <p className="paragraph">
        На основании выводов составлена таблица, содержащая рекомендации по
        выбору концепции управления состоянием для конкретного проекта.
      </p>

      <div className="table-wrapper">
        <table className="recommendations-table">
          <thead>
            <tr>
              <th>Концепция / Подход</th>
              <th>Описание</th>
              <th>Рекомендуется для</th>
              <th>Не рекомендуется для</th>
              <th>Примеры проектов</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.concept}</td>
                <td>{row.description}</td>
                <td>{row.recommended}</td>
                <td>{row.notRecommended}</td>
                <td>{row.examples}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
