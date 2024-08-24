import { Note } from "@/models/Note";

const noteId: Note = {
  id: 1,
  title: "Untukmu 2000 Tahun lalu",
  description:
    `Aku tahu ini akan menjadi salah satu hal terberat yang pernah aku lakukan, dan mungkin yang tersulit untukmu terima. Tapi aku perlu kau mengerti, ini bukanlah keputusan yang aku buat dengan mudah. Aku harus pergi, harus melanjutkan perjalanan ini sendiri, demi kita semua, demi masa depan yang kita impikan. Ketika aku memandangmu, aku melihat seseorang yang lebih berharga dari apapun di dunia ini. Kau adalah rumahku, tempat di mana aku selalu ingin kembali. Tapi dunia ini, Mikasa, dunia ini jauh lebih rumit dan kejam dari apa yang bisa kita bayangkan.\n
Sejak pertama kali kita bertemu, sejak hari di mana aku melingkarkan syal merah itu di lehermu, kau selalu menjadi kekuatanku. Kau yang memberiku alasan untuk terus maju, bahkan ketika semuanya terasa mustahil. Kau adalah cahaya di tengah kegelapan yang tak pernah berakhir ini. Tapi sekarang, aku harus memilih jalan yang akan memisahkan kita. Aku tak ingin kau terluka lebih dari ini, tak ingin melihatmu menangis karena aku. Aku ingin kau bahagia, meski itu berarti aku harus pergi.\n
Jangan pernah lupakan aku, Mikasa. Tapi jangan juga biarkan kenangan tentangku menahanmu. Kau lebih kuat dari yang kau sadari, dan aku tahu kau akan menemukan cara untuk terus maju, bahkan tanpaku. Syal itu, yang pernah aku berikan padamu, biarkan itu menjadi pengingat bahwa tak peduli seberapa jauh aku pergi, cintaku padamu takkan pernah hilang. Kau adalah dan akan selalu menjadi alasan aku berjuang.\n
Selalu ingat, Mikasa, kau adalah segalanya bagiku. Dan meski aku harus meninggalkanmu sekarang, cintaku padamu akan bertahan selamanya.\n
Eren`,
  image:
    "/note.jpg",
};

const noteEn: Note = {
  id: 1,
  title: "For You 2000 Years ago",
  description:
    `I know this will be one of the hardest things I've ever done, and probably the hardest for you to accept. But I need you to understand, this is not a decision I made lightly. I have to go, I have to continue this journey alone, for the sake of all of us, for the future we dream of. When I look at you, I see someone who is more precious than anything in this world. You are my home, the place where I always want to return. But this world, Mikasa, this world is far more complicated and cruel than we could ever imagine.\n
Since the first time we met, since the day I wrapped that red scarf around your neck, you have always been my strength. You gave me a reason to keep going, even when everything seemed impossible. You were the light in the middle of this never-ending darkness. But now, I must choose the path that will separate us. I don't want you to hurt more than this, don't want to see you cry because of me. I want you to be happy, even if it means I have to leave.\n
Never forget me, Mikasa. But don't let my memories hold you back either. You're stronger than you realize, and I know you'll find a way to move on, even without me. That scarf, the one I once gave you, let it be a reminder that no matter how far I go, my love for you will never disappear. You are and will always be the reason I fight.\n
Always remember, Mikasa, you are everything to me. And even if I have to leave you now, my love for you will last forever.\n
Eren`,
  image:
    "/note.jpg",
};

const note = ({ lang }: { lang: string }) => {    
  if (lang === "id") {
    return noteId;
  } else if (lang === "en") {
    return noteEn;
  } else {
    return noteEn;
  }
};


export default note;
