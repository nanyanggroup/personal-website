# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## 替换占位内容

摄影师的姓名、引言、邮箱、价格和照片都在 `lib/site.ts`。

- 引言、姓名、邮箱、价格：改这个文件里的对应字段。邮箱在页眉、引言和页尾都会显示，只改 `email`。
- 照片：`hero` 是首页大图，`works` 是精选作品。现在的地址是 Unsplash 占位图。把你自己的照片放到 `public/photos/`，再把 `src` 改成 `/photos/你的文件.jpg`，并改掉 `alt`、`title`、`meta`。

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button"
```
