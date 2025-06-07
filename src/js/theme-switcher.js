import refs from "/js/refs.js"; 
export function changeTheme() {
    if (document.body.classList.contains('theme-dark')) {
        document.body.classList.replace('theme-dark', 'theme-light');
        localStorage.setItem('theme', 'theme-light');
      } else {
        document.body.classList.replace('theme-light', 'theme-dark');
        localStorage.setItem('theme', 'theme-dark');
      }
}
export function checkThemeLocal(theme) {
    if (theme) {
    document.body.classList = theme;
  }}
