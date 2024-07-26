const quanTP = {
    "Thành Phố Hồ Chí Minh":["Chọn Quận/huyện","Quận 1", "Quận 2", "Quận 3"],
    "Thành Phố Hà Nội": ["Chọn Quận/huyện","Hà Đông", "Hoàn Kiếm"],
    "Tỉnh Tiền Giang": ["Chọn Quận/huyện","Thành Phố Mỹ Tho"],
};

const dsChiNhanh ={
    "Quận 1":["Phúc Long Nowzone - TTTM Nowzone, số 235 Nguyễn Văn Cừ, quận 1, Hồ Chí Minh", "Phúc Long Nguyễn Thị Minh Khai - L1-01, Tòa nhà Somerset Chancellor Court, số 21-23 Nguyễn Thị Minh Khai, quận 1, Hồ Chí Minh", "Phúc Long Mạc Thị Bưởi - 63 Mạc Thị Bưởi, quận 1, Hồ Chí Minh", "Phúc Long 29 Ngô Đức Kế - 29-31 Ngô Đức Kế, quận 1, Hồ Chí Minh"],
    "Quận 2":[],
    "Quận 3":["Phúc Long Lê Văn Sỹ - 350 Lê Văn Sỹ, quận 3, Hồ Chí Minh"],
    "Hà Đông":["Phúc Long New Skyline - Tòa nhà New Skyline, khu đô thị mới Văn Quán - Yên Phúc, phường Văn Quán, quận Hà Đông, Hà Nội"],
    "Hoàn Kiếm":["Phúc Long Hàng Điếu - 82-84 Hàng Điếu, phường Cửa Đông, quận Hoàn Kiếm, Hà Nội"],
    "Thành Phố Mỹ Tho":["Phúc Long Kiosk Nguyễn Huỳnh Đức - 42/4 Nguyễn Huỳnh Đức, phường 8, thành phố Mỹ Tho, tỉnh Tiền Giang", "Phúc Long Kiosk Trần Hưng Đạo - 915B Trần Hưng Đạo, phường 5, thành phố Mỹ Tho, tỉnh Tiền Gian"],
};

function capnhat() {
    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");
    const selectedCity = citySelect.value;

    districtSelect.innerHTML = '';

    if (selectedCity in quanTP) {
        quanTP[selectedCity].forEach(function(district) {
            const option = document.createElement("option");
            option.value = district;
            option.text = district;
            districtSelect.appendChild(option);
        });
    }
}

function displayChiNhanh() {
    const districtSelect = document.getElementById("district");
    const selectedDistrict = districtSelect.value;
    const cNList = document.getElementById("diachi-list");

    cNList.innerHTML = '';

    if (selectedDistrict in dsChiNhanh) {
        dsChiNhanh[selectedDistrict].forEach(function(diadiem) {
            const listItem = document.createElement("li");
            const icon = document.createElement("img");
            const text = document.createElement("span");
            const button = document.createElement("button");

            icon.src = "https://img.icons8.com/ios-filled/24/ffffff/shop.png"; // Link icon
            icon.classList.add("icon");

            text.textContent = diadiem;

            button.textContent = "Chỉ đường";
            button.classList.add("button");

            listItem.appendChild(icon);
            listItem.appendChild(text);
            listItem.appendChild(button);

            cNList.appendChild(listItem);
        });
    }
}
