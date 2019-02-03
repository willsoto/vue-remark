# Vue Remark

[![pipeline status](https://gitlab.com/willsoto/vue-remark/badges/master/pipeline.svg)](https://gitlab.com/willsoto/vue-remark/commits/master)
[![coverage report](https://gitlab.com/willsoto/vue-remark/badges/master/coverage.svg)](https://gitlab.com/willsoto/vue-remark/commits/master) [![Greenkeeper badge](https://badges.greenkeeper.io/willsoto/vue-remark.svg)](https://greenkeeper.io/)

> Heavily inspired by [React Markdown](https://github.com/rexxars/react-markdown)

## Installation

```bash
yarn add @willsoto/vue-remark
```

```bash
npm install @willsoto/vue-remark
```

```js
import VueRemark from "@willsoto/vue-remark";

export default {
  components: {
    VueRemark
  }
};
```

## Example

```html
<template>
  <vue-remark :source="source" />
</template>
```

```js
import VueRemark from "@willsoto/vue-remark";

export default {
  components: {
    VueRemark
  },
  data() {
    return {
      source: "# Some heading"
    };
  }
};
```
