import menuTemplate from './menu-item.hbs'
import menuData from './menu.json'
console.log(menuTemplate);
// const menuList=document.querySelector('.js-menu')
// function renderMenu(menuItems){
// const compiledTemplate=Handlebars.compile(menuTemplate);
//   const markup=menuItems.map(item => compiledTemplate(item)).join('')
//   menuList.innerHTML=markup
// }
// renderMenu(menuData)
// const Theme={
//   LIGHT:'light-theme',
//   DARK:'dark-theme',
// }
// const themeSwitchToggle=document.getElementById('theme-switch-toggle')
// const bodyElement=document.body
// themeSwitchToggle.addEventListener('change',handleThemeSwitch)
// function handleThemeSwitch(){
//   if(themeSwitchToggle.checked){
//     bodyElement.classList.add(Theme.DARK)
//     bodyElement.classList.remove(Theme.LIGHT)
//     localStorage.setItem('theme',Theme.DARK)
//   }else{
//     bodyElement.classList.add(Theme.LIGHT)
//     bodyElement.classList.remove(Theme.DARK)
//     localStorage.setItem('theme',Theme.LIGHT)
//   }
// }
// const storedTheme=localStorage.getItem('theme')
// if(storedTheme===Theme.DARK){
//   bodyElement.classList.add(Theme.DARK)
//   themeSwitchToggle.checked=true
// }else{
//   bodyElement.classList.add(Theme.LIGHT)
// }