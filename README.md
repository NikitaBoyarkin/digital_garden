# EQ in IT — цифровой сад

Цифровой сад на [Quartz v4](https://quartz.jzhao.xyz/) про эмоциональный интеллект (EQ) в IT: самосознание, саморегуляция, эмпатия, социальные навыки.

Публикуется на GitHub Pages: `https://nikitaboyarkin.github.io/digital_garden`

## Структура

```
content/            # заметки (источник сайта)
  00 eq.md          # хаб: карта ключевых понятий EQ (garden/root)
  Что такое EQ…md   # статья-введение (garden/trunk)
  …vs IQ…md         # статья (garden/trunk)
  …в цифровую эпоху…md  # статья (garden/trunk)
  Самосознание.md   # компонент EQ (garden/flower)
  Саморегуляция.md  # компонент EQ (garden/flower)
  Эмпатия.md        # компонент EQ (garden/flower)
  Социальные навыки.md  # компонент EQ (garden/flower)
  index.md          # главная страница
  _file/            # вложения (картинки)
quartz.config.ts    # конфиг сайта (baseUrl, тема, плагины)
quartz.layout.ts    # layout (футер, боковые панели)
```

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