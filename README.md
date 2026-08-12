# EQ in IT — цифровой сад

Цифровой сад на [Quartz v4](https://quartz.jzhao.xyz/) про эмоциональный интеллект (EQ) в IT: самосознание, саморегуляция, эмпатия, социальные навыки.

Публикуется на GitHub Pages: `https://nikitaboyarkin.github.io/digital_garden`

## Структура

```
content/            # заметки (источник сайта)
  00 eq.md          # хаб: карта ключевых понятий EQ (garden/root)
  MOC - EQ практики.md          # практика EQ (garden/root)
  MOC - Продуктовая аналитика.md  # 2-й хаб: аналитика (garden/root)
  Что такое EQ…md   # статья-введение (garden/trunk)
  …vs IQ…md         # статья (garden/trunk)
  …в цифровую эпоху…md  # статья (garden/trunk)
  Самосознание.md   # компонент EQ (garden/flower)
  Саморегуляция.md  # компонент EQ (garden/flower)
  Эмпатия.md        # компонент EQ (garden/flower)
  Социальные навыки.md  # компонент EQ (garden/flower)
  Разбор - *.md     # разборы кейсов (garden/fruit, draft)
  С чего начать.md  # onboarding-маршрут (garden/trunk)
  Обо мне.md        # страница автора (garden/leaf)
  graph.md          # полноэкранный граф-указатель (garden/leaf)
  index.md          # главная страница
  _file/            # вложения (картинки)
quartz.config.ts    # конфиг сайта (baseUrl, тема, плагины, analytics)
quartz.layout.ts    # layout (navbar, футер, боковые панели, граф)
quartz/components/Navbar.tsx     # верхняя навигация
quartz/components/GraphFull.tsx   # полноэкранный граф на /graph
```

## Навигация

- Верхний navbar (главная / С чего начать / Темы / Граф / Обо мне / Telegram) — `Navbar.tsx`.
- Полноэкранный интерактивный граф на `/graph` — `GraphFull.tsx` (рендерится через `ConditionalRender` только на этой странице; на остальных страницах граф остаётся в правой панели).
- Внутренние ссылки navbar относительные (`pathToRoot`) — корректно работают под подпутём GitHub Pages.

## Локальный запуск

Требуется Node 20+ (проект собирается на Node 22/24).

```bash
npm ci
npx quartz build --serve      # превью на http://localhost:8080
npx quartz build              # одноразовая сборка в public/
```

## Деплой

Автоматически через `.github/workflows/deploy.yaml` при пуше в ветку `v4` → GitHub Pages.

```bash
npx quartz sync                # коммит + пуш (триггерит деплой)
```

Settings → Pages → Source = "GitHub Actions".

## Конвенции контента

- **Wikilinks (`[[…]]`) — иммутабельны.** Не превращать в `[text](url)`, не удалять.
- **Frontmatter** каждой заметки: `title`/`description`, один тег `garden/*` (`root` — MOC/хаб, `trunk` — синтез-статья, `flower` — компонент/лист), `aliases` для синонимов.
- **`prev`/`next`** в YAML — цепочка чтения, оборачивать wikilinks в двойные кавычки: `"[[…]]"`.
- **Вложения** лежат в `content/_file/`, embed — `![[_file/файл.png]]`. (Корневая папка `_file/` вне `content/` в Quartz не публикуется — хранится для Obsidian.)
- Черновики: `draft: true` или `publish: false` в frontmatter.

## Связь

Telegram: https://t.me/lofinibo