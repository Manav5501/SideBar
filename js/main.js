let btn = document.getElementById('btn')
      console.log(btn)
      let sidebar = document.querySelector('#sidebar')
      console.log(sidebar)
btn.onclick = function() {
        sidebar.classList.toggle('active')
        document.getElementById("btn").classList.toggle("bx-x")
           
}