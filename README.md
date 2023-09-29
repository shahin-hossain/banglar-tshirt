# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Banglar T-shirt 

### Feature & functionality
- T-shirt data load
- cart section added
- added & deleted
- toast
- conditional rendering
- pops drill
- context api
### Netlify তে বিভিন্ন Rout এ  গিয়ে Reload দিলে page not found 404 আসে এটা কিভাবে সমাধান করা যায়।

- public folder এর মধ্যে (_redirects)  একটা file করে তার মধ্যে (/* /index.html 200 set করতে হবে।)

```js
public/_redirects > /* /index.html 200
```
### surge এর এই একই সমস্যা হয়। সমাধান হলো।

- npm run build করার পরে dist folder এর মধ্যে index.html কে copy করে 200.html করতে হবে।