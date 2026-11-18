/**
 * 站点里需要换成你自己内容的地方，都在这个文件。
 *
 * 照片
 * - `hero` 是首页引言旁边的大图，`works` 是下面的精选作品。
 * - 现在的 `src` 都是 Unsplash 占位图，不是你的作品。
 * - 把照片放进 `public/photos/`，再把 `src` 改成 `/photos/文件名.jpg`。
 * - 同时改 `alt`（读屏用，写照片里实际有什么）、`title` 和 `meta`。
 *
 * 文字
 * - `name`、`statement`、`intro` 是引言：你是谁、你拍什么。
 * - `email` 会出现在页眉、引言和页尾。只改这一处。
 * - `pricing` 是价格表。数字是占位，按你的收费改。
 */

export type Photo = {
  src: string
  alt: string
  title: string
  meta: string
  aspect:
    | "aspect-[3/2]"
    | "aspect-[3/4]"
    | "aspect-[4/5]"
    | "aspect-[5/4]"
    | "aspect-[16/10]"
}

export type Work = Photo & {
  span:
    | "lg:col-span-4"
    | "lg:col-span-5"
    | "lg:col-span-6"
    | "lg:col-span-7"
    | "lg:col-span-8"
}

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80`

export const site = {
  name: "林晚",
  email: "hello@example.com",
  statement: "人物、居所，以及旅途中的光线。",
  intro: [
    "我拍人在一个地方停留时的样子，也拍光落在桌上、走廊和路边的那一会儿。",
    "工作大多在自然光里完成。人物、居所、小型的聚会，以及偶尔出远门时沿途的风景。照片尽量少做后期，把当时的颜色留下来。",
  ],
  hero: {
    src: unsplash("photo-1469474968028-56623f02e42e"),
    alt: "阳光落在远处的山脊和草地上",
    title: "山脊上的光",
    meta: "风景",
    aspect: "aspect-[3/2]",
  } satisfies Photo,
  works: [
    {
      src: unsplash("photo-1531746020798-e6953c6e8e04"),
      alt: "侧过脸的人，光线落在脸上",
      title: "肖像",
      meta: "人物",
      aspect: "aspect-[3/4]",
      span: "lg:col-span-5",
    },
    {
      src: unsplash("photo-1478144592103-25e218a04891"),
      alt: "俯拍的一桌菜和餐具",
      title: "一桌菜",
      meta: "静物",
      aspect: "aspect-[3/2]",
      span: "lg:col-span-7",
    },
    {
      src: unsplash("photo-1441974231531-c6227db76b6e"),
      alt: "阳光穿过林间",
      title: "林子",
      meta: "风景",
      aspect: "aspect-[4/5]",
      span: "lg:col-span-4",
    },
    {
      src: unsplash("photo-1501785888041-af3ef285b470"),
      alt: "湖水和远处的山",
      title: "湖",
      meta: "风景",
      aspect: "aspect-[3/2]",
      span: "lg:col-span-8",
    },
    {
      src: unsplash("photo-1511285560929-80b456fea0bc"),
      alt: "两个人走在户外",
      title: "两个人",
      meta: "人物",
      aspect: "aspect-[3/4]",
      span: "lg:col-span-6",
    },
    {
      src: unsplash("photo-1445116572660-236099ec97a0"),
      alt: "窗边的杯子和早晨的光",
      title: "早晨",
      meta: "静物",
      aspect: "aspect-[5/4]",
      span: "lg:col-span-6",
    },
    {
      src: unsplash("photo-1470770841072-f978cf4d019e"),
      alt: "黄昏时水边的房子",
      title: "黄昏的房子",
      meta: "居所",
      aspect: "aspect-[3/2]",
      span: "lg:col-span-7",
    },
    {
      src: unsplash("photo-1418065460487-3e41a6c84dc5"),
      alt: "雾气里的树林",
      title: "雾",
      meta: "风景",
      aspect: "aspect-[4/5]",
      span: "lg:col-span-5",
    },
  ] satisfies Work[],
  pricing: [
    {
      name: "人像",
      price: "1,800 元起",
      detail: "约一小时，一个地点。十五张修过的照片，原片一并给你。",
    },
    {
      name: "家庭与日常",
      price: "2,600 元起",
      detail: "约两小时，在家里或附近走走。二十五张修过的照片。",
    },
    {
      name: "活动记录",
      price: "4,800 元起",
      detail: "半天。记下当天的经过，并留下合影。",
    },
  ],
  pricingNote:
    "下面是常见安排的起点。地点更远、需要提前到场，或希望停留得更久，费用会不一样。确定日期之前，先写信。",
  contactNote: "想约一个时间，或先问一句是否合适，直接写信。",
} as const

export const mailto = `mailto:${site.email}`
