// ລະບົບຄົ້ນຫາດ້ວຍຊື່
function searchFunction() {
    let input = document.getElementById("docSearch");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("docTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1]; // ຄົ້ນຫາໃນຖັນທີ 2 (ຊື່ເອກະສານ)
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
async function fetchNews() {
    const container = document.getElementById('news-container');
    try {
        const response = await fetch('https://api.github.com/repos/sone22015-sudo/psshd512.com/contents/data/news');
        const files = await response.json();
        
        container.innerHTML = ''; 

        for (const file of files.reverse()) { 
            if (file.name.endsWith('.md')) {
                const res = await fetch(file.download_url);
                const content = await res.text();
                
                const title = content.match(/title: (.*)/)?.[1]?.replace(/"/g, '') || "ບໍ່ມີຫົວຂໍ້";
                const image = content.match(/image: (.*)/)?.[1]?.replace(/"/g, '') || "image/default.jpg";
                
                // ສ້າງ Link ໄປຫາໜ້າລາຍລະອຽດ ໂດຍສົ່ງຊື່ໄຟລ໌ໄປນຳ
                const detailUrl = `news-detail.html?f=${file.name}`;

                const newsItem = document.createElement('div');
                newsItem.className = 'news-item-container';
                newsItem.style.marginBottom = "30px";
                newsItem.innerHTML = `
                    <div style="border: 1px solid #ddd; padding: 10px; background: #fff;" onclick="window.location.href='${detailUrl}'">
                        <img src="${image}" alt="Activity" style="width:100%; max-height:450px; object-fit:cover;">
                    </div>
                    <h4 style="margin-top:15px; color:#003366; font-size:18px;">
                        <a href="${detailUrl}" style="text-decoration:none; color:inherit;">${title}</a>
                    </h4>
                    <a href="${detailUrl}" class="read-more-btn">ອ່ານລາຍລະອຽດ...</a>
                `;
                container.appendChild(newsItem);
            }
        }
    } catch (error) {
        container.innerHTML = '<p>ບໍ່ສາມາດໂຫລດຂ່າວໄດ້ໃນຕອນນີ້.</p>';
    }
}
fetchNews();
// ລະບົບແຍກໝວດໝູ່
function filterSelection(c) {
    let x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i].className.indexOf(c) > -1) {
            x[i].style.display = "";
        } else {
            x[i].style.display = "none";
        }
    }
    
    // ປ່ຽນສີປຸ່ມທີ່ກຳລັງ Active
    let btns = document.getElementsByClassName("btn-filter");
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
}
let slideIndex = 1;
showSlides(slideIndex);

// ຟັງຊັນປ່ຽນຮູບດ້ວຍປຸ່ມ
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// ໃຫ້ມັນເລື່ອນເອງອັດຕະໂນມັດ
setInterval(function() {
    plusSlides(1);
}, 5000);
