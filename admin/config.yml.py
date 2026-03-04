backend:
  name: git-gateway
  branch: main # ຫຼື master ຕາມຊື່ branch ໃນ GitHub ຂອງເຈົ້າ

media_folder: "images/news" # ບ່ອນເກັບຮູບທີ່ອັບໂຫຼດຜ່ານ CMS
public_folder: "/images/news"

collections:
  - name: "news" # ຊື່ຊຸດຂໍ້ມູນ
    label: "ຂ່າວສານ"
    folder: "data/news" # ບ່ອນເກັບໄຟລ໌ຂ່າວ (ເປັນ JSON ຫຼື Markdown)
    create: true # ໃຫ້ເພີ່ມຂ່າວໃໝ່ໄດ້
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields: # ຊ່ອງກອກຂໍ້ມູນໃນໜ້າ Admin
      - { label: "ຫົວຂໍ້ຂ່າວ", name: "title", widget: "string" }
      - { label: "ວັນທີ", name: "date", widget: "datetime" }
      - { label: "ຮູບພາບປົກ", name: "image", widget: "image" }
      - { label: "ເນື້ອໃນຂ່າວ", name: "body", widget: "markdown" }