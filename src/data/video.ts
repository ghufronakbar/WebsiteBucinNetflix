import { Video } from "@/models/Video";

const videoEn: Video = {
  id: 1,
  title: "Eremika",
  subtitle: "In the midst of a world filled with destruction and threats, I always found hope in Mikasa. From the first day I wrapped that red scarf around her neck, I knew my life would never be the same again. She was my strength, my protector, and the reason why I kept fighting despite the fear that loomed over me. With Mikasa, I believe that despite all the darkness, our love can be the light that illuminates our path to freedom.",
  description: "From the first time I saw her, I knew Mikasa was no ordinary girl. When my father and I found her broken family, and I wrapped that red scarf around her neck, I never expected that we would bond in such a way. Mikasa wasn't just a friend, she was my home, the only place where I felt safe. In every battle, she was there, her sword gleaming in the setting sun, always guarding my back, always protecting. \n\nIn a world full of titans and fear, Mikasa was the only thing that kept me standing. Whenever I felt defeated, her voice-full of warmth and strength-reminded me to keep fighting. I want to be free, I want to break down these walls, but more than that, I want her to stay safe. No matter what happens, I know she will always be by my side, and that alone is enough for me to keep going. Even if the world changes, and even if I have to make unthinkable decisions, the one thing that never changes is my love for her. Mikasa is everything to me-she is my breath, my strength, and the only hope I have.",
  thumbnail: "/thumbnail.png",
  url: "https://www.youtube.com/embed/VWpR95AJ3NM?autoplay=1&mute=1",
  casts: ["Eren Yeager", "Mikasa Ackerman"],
  genres: ["Romance", "Slice of Life", "Comedy", "Documentary"],
  types: ["Bittersweet", "Emotional"],
  duration: "5m 3s",
  rated: "13+",
  year: "2024",
  quality: "HD"
};

const videoId: Video = {
  id: 1,
  title: "Eremika",
  subtitle: "Di tengah dunia yang dipenuhi kehancuran dan ancaman, aku selalu menemukan harapan dalam diri Mikasa. Sejak hari pertama aku melingkarkan syal merah itu di lehernya, aku tahu hidupku takkan pernah sama lagi. Dia adalah kekuatanku, pelindungku, dan alasan mengapa aku terus berjuang meski rasa takut terus membayangi. Bersama Mikasa, aku percaya bahwa di balik semua kegelapan, cinta kami bisa menjadi cahaya yang menerangi jalan kami menuju kebebasan.",
  description: "Sejak pertama kali aku melihatnya, aku tahu Mikasa bukanlah gadis biasa. Ketika ayahku dan aku menemukan keluarganya yang hancur, dan aku membalutkan syal merah itu di lehernya, aku tak pernah menduga bahwa kami akan terikat sedemikian rupa. Mikasa bukan hanya sekadar teman, dia adalah rumahku, satu-satunya tempat di mana aku merasa aman. Di setiap pertempuran, dia ada di sana, pedangnya berkilau di bawah matahari yang terbenam, selalu menjaga punggungku, selalu melindungi. \n\nDi dunia yang penuh dengan titan dan ketakutan, Mikasa adalah satu-satunya yang membuatku tetap berdiri. Setiap kali aku merasa kalah, suaranya—penuh kehangatan dan kekuatan—mengingatkanku untuk terus berjuang. Aku ingin bebas, aku ingin menghancurkan dinding-dinding ini, tapi lebih dari itu, aku ingin dia tetap aman. Apa pun yang terjadi, aku tahu dia akan selalu di sisiku, dan itu saja sudah cukup bagiku untuk terus maju. Meski dunia berubah, dan meski aku harus membuat keputusan yang tak terpikirkan, satu hal yang tak pernah berubah adalah cintaku padanya. Mikasa adalah segalanya bagiku—dia adalah nafasku, kekuatanku, dan satu-satunya harapan yang kumiliki.",
  thumbnail: "/thumbnail.png",
  url: "https://www.youtube.com/embed/VWpR95AJ3NM?autoplay=1&mute=1",
  casts: ["Eren Yeager", "Mikasa Ackerman"],
  genres: ["Romance", "Slice of Life", "Comedy", "Documentary"],
  types: ["Bittersweet", "Emotional"],
  duration: "5m 3s",
  rated: "13+",
  year: "2024",
  quality: "HD"
};

const video = ({ lang }: { lang: string }) => {    
  if (lang === "id") {
    return videoId;
  } else if (lang === "en") {
    return videoEn;
  } else {
    return videoEn;
  }
};

export default video