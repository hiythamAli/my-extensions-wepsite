let isDay = false;

document.addEventListener("DOMContentLoaded", () => {
  const toast = document.getElementById("toast");

  document.addEventListener("click", (event) => {
    const removeBtn = event.target.closest(".btn");
    if (removeBtn) {
      const container = removeBtn.closest(".container");

      // ✅ تأكيد الحذف
      const confirmed = confirm("هل أنت متأكد أنك تريد حذف هذا العنصر؟");
      if (confirmed && container) {
        container.remove();

        // ✅ عرض رسالة التوست
        toast.textContent = "تم الحذف";
        toast.classList.add("show");

        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);
      }
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitches = document.querySelectorAll(".toggle-switch");
  const allBtn = document.querySelector(".btn1");
  const activeBtn = document.querySelector(".btn2");
  const inactiveBtn = document.querySelector(".btn3");

  // Update card class based on switch status
  toggleSwitches.forEach((sw) => {
    sw.addEventListener("change", () => {
      const container = sw.closest(".container");
      if (sw.checked) {
        container.classList.add("active");
        container.classList.remove("inactive");
      } else {
        container.classList.add("inactive");
        container.classList.remove("active");
      }
    });
  });

  // Show all cards
  allBtn.addEventListener("click", () => {
    document.querySelectorAll(".container").forEach((card) => {
      card.style.display = "block";
    });
  });

  // Show only active
  activeBtn.addEventListener("click", () => {
    document.querySelectorAll(".container").forEach((card) => {
      card.style.display = card.classList.contains("active") ? "block" : "none";
    });
  });
 

  // Show only inactive
  inactiveBtn.addEventListener("click", () => {
    document.querySelectorAll(".container").forEach((card) => {
      card.style.display = card.classList.contains("inactive") ? "block" : "none";
    });
  });
});






function toggleMode() {


  
  
  

  


  const body =  document.querySelector(".body");
  const icons = document.querySelectorAll('.btn'); // حدد الأيقونات إذا عندك كلاس 'icon'
  const texts = document.querySelectorAll('.card-name '); // حدد النصوص بكلاس 'text' إن وجد
  const cards = document.querySelectorAll('.cards '); // حدد النصوص بكلاس 'text' إن وجد
  const cards1 = document.querySelectorAll('.cards1 '); // حدد النصوص بكلاس 'text' إن وجد
  const cards2 = document.querySelectorAll('.cards2 '); // حدد النصوص بكلاس 'text' إن وجد
const moon =document.querySelector(".moon");
 

  // تبديل الوضع الليلي
 

  // تدوير الأيقونة
  moon.classList.toggle("rotate");

  // تغيير الأيقونة إذا أردت



  
  if (!isDay) {
    // الوضع النهاري
    body.style.background ="linear-gradient(to right, #e0f7fa, #ffffff)";
    body.style.color = "#000";


    moon.src = "images1/icon-sun.svg"; // أيقونة الوضع الليلي
   
    body.classList.remove("night-mode");
    moon.src = "images1/icon-sun.svg";

    icons.forEach(icon => icon.style.color = "linear-gradient(to right, #e0f7fa, #ffffff)");
    texts.forEach(text => text.style.color = "#000");
cards.forEach(cards => cards.style.backgroundColor = "linear-gradient(to right, #e0f7fa, #ffffff)")
cards1.forEach(cards1 => cards1.style.backgroundColor = "linear-gradient(to right, #e0f7fa, #ffffff)")
cards2.forEach(cards2 => cards2.style.backgroundColor = "linear-gradient(to right, #e0f7fa, #ffffff)")



    isDay = true;
  } else {
    // الوضع الليلي
    body.style.background ="linear-gradient(to right, #0f2027, #203a43, #2c5364)";

    body.style.color = "#fff";
 moon.src = "images1/icon-moon.svg";
 
 
    icons.forEach(icon => icon.style.color = "#fff");
    texts.forEach(text => text.style.color = "#fff");
    cards.forEach(cards => cards.style.backgroundColor = "linear-gradient(to right, #0f2027, #203a43, #2c5364)")
    cards1.forEach(cards1 => cards1.style.backgroundColor = "linear-gradient(to right, #0f2027, #203a43, #2c5364)")
    cards2.forEach(cards2 => cards2.style.backgroundColor = "linear-gradient(to right, #0f2027, #203a43, #2c5364)")
    isDay = false;
  }
}


