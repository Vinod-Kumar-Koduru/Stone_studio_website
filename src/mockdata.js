import { v4 as uuidv4 } from "uuid";
const mockData = {
  FeatureSections: [
    {
      id: uuidv4(),
      title: "Terrace buddha",
      description:
        "Handcrafted Buddha Statue set against a terracotta patterned backdrop, bringing peace, elegance, and spiritual harmony to any space.",
      imageUrl:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764333825/IMG-20251117-WA0157_kzknwq.jpg",
      alt: "Terrace Buddha",
    },
    {
      id: uuidv4(),
      title: "Temple",
      description:
        "It brings you intricately carved marble temples that redefine elegance and devotion, blending heritage designs with contemporary style—perfect for homes, villas, and spiritual spaces. ",
      imageUrl:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1763460693/mandir_xm5p4m.jpg",
      alt: "Temple",
    },
  ],
  Products: [
    {
      id: uuidv4(),
      title: "MURALS",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764335669/IMG-20251128-WA0012_acgnhu.jpg",
      buttonText: "Contact",
      description:
        "Beautiful carved wall art of Radha Krishna in an elegant white stone finish.",
      alt: "MURALS",
    },
    {
      id: uuidv4(),
      title: "IDOLS",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764338967/SmartSelect_20230709_150937_Chrome_2_qion0y.jpg",
      buttonText: "Contact",
      description:
        "Exquisite Vietnam marble Ganesh idol in a benevolent blessing pose, perfect for home entrances and sacred landscape décor.",
      alt: "IDOLS",
    },
    {
      id: uuidv4(),
      title: "Temple",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764334148/IMG-20251117-WA0037_gt44im.jpg",
      buttonText: "Contact",
      description:
        "Beautifully carved white marble home temple with intricate pillars, dome design, and traditional Jain Sanskrit engravings",
      alt: "Temple",
    },
    {
      id: uuidv4(),
      title: "FIBER ART",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764335331/IMG-20251128-WA0015_piyksd.jpg",
      buttonText: "Contact",
      description:
        "High-definition Balaji wall relief in durable fiber, featuring a 3D texture and elaborate floral ornamentation.",
      alt: "FIBER ART",
    },
    {
      id: uuidv4(),
      title: "FOUNTAINS",
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763818007/fountain_oztzmk.jpg",
      buttonText: "Contact",
      description:
        "Elegant marble garden fountain with flowing water, perfect for outdoor décor.",
      alt: "FOUNTAINS",
    },
    {
      id: uuidv4(),
      title: "TULSI PLANTER",
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763817717/tulsi_fqdhn6.jpg",
      buttonText: "Contact",
      description:
        "Beautiful carved stone pedestal planter featuring lotus detailing and Ganesha engraving.",
      alt: "TULSI KOTA",
    },
    {
      id: uuidv4(),
      title: "MODERN ARTS",
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763817716/modern_art_ioluki.webp",
      buttonText: "Contact",
      description:
        "Minimalistic white marble Ganesha idol, perfect for home décor and gifting.",
      alt: "MODERN ARTS",
    },
    {
      id: uuidv4(),
      title: "SCUPLTURES",
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763817716/buddha_b1mpqn.jpg",
      buttonText: "Contact",
      description:
        "Elegant outdoor Buddha statue in meditation pose, perfect for garden and landscape décor.",
      alt: "SCULPTURES",
    },
    {
      id: uuidv4(),
      title: "Pergolas & Benches",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764334500/garden-pergola-seating-Picsart-AiImageEnhancer_qnjipb.jpg",
      buttonText: "Contact",
      description:
        "Exquisitely carved stone pergola featuring fluted columns and elegant built-in seating in a serene garden setting.",
      alt: "pergolas and benches",
    },
  ],
  Elevations: [
    {
      id: uuidv4(),
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763821126/1_ztqigl.jpg",
      alt: "Indain marble flowe Design",
    },
    {
      id: uuidv4(),
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763821126/2_xmrobo.jpg",
      alt: "elevation",
    },
    {
      id: uuidv4(),
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763821126/3_eczakb.jpg",
      alt: "elevation",
    },
    {
      id: uuidv4(),
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763821129/4_raw6xk.png",
      alt: "elevation",
    },
    {
      id: uuidv4(),
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763821127/5_m1aiyz.jpg",
      alt: "elevation",
    },
    {
      id: uuidv4(),
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763821127/6_jkmopr.jpg",
      alt: "elevation",
    },
  ],
  CustomerReviews: [
    {
      id: uuidv4(),
      imgUrl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079139/Screenshot_2025-11-24_161347_xgsymj.png",
      alt: "Customer Review 1",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079138/Screenshot_2025-11-24_153556_ckx4fh.png",
      alt: "Customer Review 2",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079138/Screenshot_2025-11-24_161225_rs2yxu.png",
      alt: "Customer Review 3",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079137/Screenshot_2025-11-24_150611_yen3ec.png",
      alt: "Customer Review 4",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079138/Screenshot_2025-11-24_161325_bbfniz.png",
      alt: "Customer Review 5",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079138/Screenshot_2025-11-24_153429_pjfr37.png",
      alt: "Customer Review 6",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079138/Screenshot_2025-11-24_153358_cqyhm8.png",
      alt: "Customer Review 7",
    },
  ],
};
export default mockData;
