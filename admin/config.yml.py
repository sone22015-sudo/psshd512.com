backend:
  name: git-gateway
  branch: main # ກວດເບິ່ງວ່າ GitHub ຂອງເຈົ້າໃຊ້ main ຫຼື master

media_folder: "image" # ບ່ອນເກັບຮູບພາບທີ່ອັບໂຫຼດຜ່ານ CMS
public_folder: "/image"

collections:
  - name: "news"
    label: "ຂ່າວສານ"
    folder: "data/news" # ບ່ອນທີ່ຂ່າວຈະຖືກເກັບເປັນໄຟລ໌ .md
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "หัวข้อ", name: "title", widget: "string" }
      - { label: "วันที่", name: "date", widget: "datetime" }
      - { label: "รูปภาพ", name: "image", widget: "image" }
      - { label: "เนื้อหา", name: "body", widget: "markdown" }