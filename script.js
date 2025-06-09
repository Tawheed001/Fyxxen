const btn = document.getElementById('waitlist-btn');
function update(state){
  btn.textContent = state ? 'Exit Waitlist' : 'Join the Waitlist';
  btn.style.background = state ? '#aaa' : '#ff6b6b';
}
btn.onclick =()=>{
  let joined = localStorage.getItem('waitlist')==='true';
  joined = !joined;
  localStorage.setItem('waitlist', joined);
  alert(joined? 'You Have Joined the Waitlist':'You Have Exited the Waitlist');
  update(joined);
};
window.onload = ()=> update(localStorage.getItem('waitlist')==='true');
