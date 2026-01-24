import { v4 as uuidv4 } from "uuid";
const mockData = {
  FeatureSections: [
    {
      id: uuidv4(),
      title: "Terrace buddha",
      description:
        "Handcrafted Buddha Statue set against a terracotta patterned backdrop, bringing peace, elegance, and spiritual harmony to any space.",
      imageUrl:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764856381/kjg_omkdag.jpg",
      alt: "Terrace Buddha",
    },
    {
      id: uuidv4(),
      title: "Temple",
      description:
        "It brings you intricately carved marble temples that redefine elegance and devotion, blending heritage designs with contemporary style—perfect for homes, villas, and spiritual spaces. ",
      imageUrl:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764856379/mandir_tat12z.jpg",
      alt: "Temple",
    },
  ],
  Products: [
    {
      id: uuidv4(),
      title: "Murals",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764335669/IMG-20251128-WA0012_acgnhu.jpg",
      buttonText: "Contact",
      description:
        "Beautiful carved wall art of Radha Krishna in an elegant white stone finish.",
      alt: "MURALS",
    },
    {
      id: uuidv4(),
      title: "Idols",
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
      title: "Fiber Art",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764335331/IMG-20251128-WA0015_piyksd.jpg",
      buttonText: "Contact",
      description:
        "High-definition Balaji wall relief in durable fiber, featuring a 3D texture and elaborate floral ornamentation.",
      alt: "FIBER ART",
    },
    {
      id: uuidv4(),
      title: "Fountains",
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768591225/ChatGPT_Image_Jan_17_2026_12_47_27_AM_1_svxpxp.png",
      buttonText: "Contact",
      description:
        "Elegant marble garden fountain with flowing water, perfect for outdoor décor.",
      alt: "FOUNTAINS",
    },
    {
      id: uuidv4(),
      title: "Tulsi Planter",
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1763817717/tulsi_fqdhn6.jpg",
      buttonText: "Contact",
      description:
        "Beautiful carved stone pedestal planter featuring lotus detailing and Ganesha engraving.",
      alt: "TULSI KOTA",
    },
    {
      id: uuidv4(),
      title: "Sculptures",
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
      alt: "Pergolas & Benches",
    },
    {
      id: uuidv4(),
      title: "Wash Basin",
      image:
        "https://res.cloudinary.com/deaijw2yr/image/upload/v1764682658/Screenshot_2025-12-02_190212-Picsart-AiImageEnhancer_dkrmlv.jpg",
      buttonText: "Contact",
      description:
        "Hand-polished stone basin framed by a subtle textured surface, adding sophistication, serenity, and timeless beauty to any interior.",
      alt: "Wash Basin",
    },
    {
      id: uuidv4(),
      title: "Mosaic",
      image:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767707800/mosaic_m1sqeb.jpg",
      buttonText: "Contact",
      description:
        "Mosaic adds timeless elegance to a home by blending colors, patterns, and textures into artistic surfaces that enhance beauty and character.",
      alt: "Mosaic",
    },
  ],
  ProductListItems: [
    {
      id: uuidv4(),
      title: "murals",
      displayImgurl:
        "https://res.cloudinary.com/deaijw2yr/image/upload/v1767698172/IMG-20260106-WA0000_ykwjzm.jpg",
      items: [
        {
          id: uuidv4(),
          title: "Shiva Mural",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767614592/7_zwhbmh.png",
          alt: "Shiva Mural",
        },
        {
          id: uuidv4(),
          title: "RadhaKrishna Mural",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767013429/2_hkvf7c.png",
          alt: "RadhaKrishna Mural",
        },
        {
          id: uuidv4(),
          title: "Balaji Mural",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767013434/3_wehuiz.png",
          alt: "Balaji Mural",
        },
        {
          id: uuidv4(),
          title: "Hanuman Mural",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767614581/4_pjvzgr.png",
          alt: "Hanuman Mural",
        },
        {
          id: uuidv4(),
          title: "Abstract Mural",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768592584/ChatGPT_Image_Jan_17_2026_01_11_19_AM_krhveg.png",
          alt: "Abstract Mural",
        },
        {
          id: uuidv4(),
          title: "Ganesh Mural",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767013441/6_dipru4.png",
          alt: "Ganesh Mural",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "idols",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768813637/ChatGPT_Image_Jan_19_2026_02_37_11_PM_svkzht.png",
      items: [
        {
          id: uuidv4(),
          title: "Small Ganesh",
          image:
            "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764338967/SmartSelect_20230709_150937_Chrome_2_qion0y.jpg",
          alt: "Small Ganesh",
        },
        {
          id: uuidv4(),
          title: "Standing Ganesh",
          image:
            "https://res.cloudinary.com/dl4viyuwh/image/upload/v1767425372/SmartSelect_20230710_093543_Chrome_2_mcecaa.jpg",
          alt: "Standing Ganesh",
        },
        {
          id: uuidv4(),
          title: "Standing Ganesh",
          image:
            "https://res.cloudinary.com/dl4viyuwh/image/upload/v1767425370/SmartSelect_20230708_111500_Chrome_2_gmruz5.jpg",
          alt: "Standing Ganesh",
        },
        {
          id: uuidv4(),
          title: "Standing Ganesh",
          image:
            "https://res.cloudinary.com/dl4viyuwh/image/upload/v1767425370/SmartSelect_20230709_151137_Chrome_2_vxyr2r.jpg",
          alt: "Standing Ganesh",
        },
        {
          id: uuidv4(),
          title: "Standing Ganesh",
          image:
            "https://res.cloudinary.com/dl4viyuwh/image/upload/v1767425370/SmartSelect_20230709_170737_Chrome_2_o6p25z.jpg",
          alt: "Standing Ganesh",
        },
        {
          id: uuidv4(),
          title: "Standing Ganesh",
          image:
            "https://res.cloudinary.com/dl4viyuwh/image/upload/v1767425371/SmartSelect_20230709_172502_Chrome_2_updmvx.jpg",
          alt: "Standing Ganesh",
        },
        {
          id: uuidv4(),
          title: "Standing Ganesh",
          image:
            "https://res.cloudinary.com/dl4viyuwh/image/upload/v1767425371/SmartSelect_20230708_135820_Chrome_ikb5kt.jpg",
          alt: "Standing Ganesh",
        },
        {
          id: uuidv4(),
          title: "Standing Ganesh",
          image:
            "https://res.cloudinary.com/dl4viyuwh/image/upload/v1767425371/SmartSelect_20230709_173338_Chrome_2_djyjcv.jpg",
          alt: "Standing Ganesh",
        },
        {
          id: uuidv4(),
          title: "Standing Ganesh",
          image:
            "https://res.cloudinary.com/dl4viyuwh/image/upload/v1767425371/SmartSelect_20230710_093857_Chrome_3_epsxhv.jpg",
          alt: "Standing Ganesh",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Temple",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767699849/ChatGPT_Image_Jan_6_2026_05_11_18_PM_pei6kf.png",
      items: [
        {
          id: uuidv4(),
          title: "Mini Temple",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767623049/2_s5lgdk.png",
          alt: "Mini Temple",
        },
        {
          id: uuidv4(),
          title: "Mini Temple",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767623048/5_zdugwo.png",
          alt: "Mini Temple",
        },
        {
          id: uuidv4(),
          title: "Mini Temple",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767623048/ChatGPT_Image_Jan_5_2026_07_31_39_PM_kutzkl.png",
          alt: "Mini Temple",
        },
        {
          id: uuidv4(),
          title: "Mini Temple",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767623048/4_kyenre.png",
          alt: "Mini Temple",
        },
        {
          id: uuidv4(),
          title: "Mini Temple",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1769080508/temple1_cbibv1.jpg",
          alt: "Mini Temple",
        },
        {
          id: uuidv4(),
          title: "Mini Temple",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767623046/3_hbrpjt.png",
          alt: "Mini Temple",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "fiber art",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767700353/ChatGPT_Image_Jan_6_2026_05_22_18_PM_qhu024.png",
      items: [
        {
          id: uuidv4(),
          title: "Ganesh Relief",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767013718/1_jdxogz.png",
          alt: "Ganesh Relief",
        },
        {
          id: uuidv4(),
          title: "Balaji Relief",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767013720/2_idpfgx.png",
          alt: "Balaji Relief",
        },
        {
          id: uuidv4(),
          title: "Balaji Relief",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767013721/3_yxl7tg.png",
          alt: "Balaji Relief",
        },
        {
          id: uuidv4(),
          title: "Ganesh Relief",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767618318/5_roqxxf.jpg",
          alt: "Ganesh Relief",
        },
        {
          id: uuidv4(),
          title: "Ganesh Relief",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767013721/5_uvrmxz.png",
          alt: "Ganesh Relief",
        },
        {
          id: uuidv4(),
          title: "Radhakrishna Relief",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768575884/ChatGPT_Image_Jan_16_2026_08_34_20_PM_ry0t9s.png",
          alt: "Radhakrishna Relief",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "fountains",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767700921/ChatGPT_Image_Jan_6_2026_05_31_05_PM_trmzsu.png",
      items: [
        {
          id: uuidv4(),
          title: "Garden Fountain",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767618781/4_jf3ku7.jpg",
          alt: "Garden Fountain",
        },
        {
          id: uuidv4(),
          title: "Garden Fountain",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767618781/2_qrg2i1.jpg",
          alt: "Garden Fountain",
        },
        {
          id: uuidv4(),
          title: "Garden Fountain",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767618781/3_jxrsp1.jpg",
          alt: "Garden Fountain",
        },
        {
          id: uuidv4(),
          title: "Garden Fountain",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767618786/6_wqnhtt.png",
          alt: "Garden Fountain",
        },
        {
          id: uuidv4(),
          title: "Garden Fountain",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768811674/fountain_1_b8aedi.png",
          alt: "Garden Fountain",
        },
        {
          id: uuidv4(),
          title: "Garden Fountain",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768334638/7_d5eval.png",
          alt: "Garden Fountain",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "tulsi planter",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768588075/ChatGPT_Image_Jan_16_2026_11_57_07_PM_mmpyk8.png",
      items: [
        {
          id: uuidv4(),
          title: "Tulsi Kot",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767619243/4_fku4oi.png",
          alt: "Tulsi Kot",
        },
        {
          id: uuidv4(),
          title: "Tulsi Kot",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767619243/2_epcfva.jpg",
          alt: "Tulsi Kot",
        },
        {
          id: uuidv4(),
          title: "Tulsi Kot",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767619244/5_twjq8a.jpg",
          alt: "Tulsi Kot",
        },
        {
          id: uuidv4(),
          title: "Tulsi Kot",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767619244/6_ax7cxu.jpg",
          alt: "Tulsi Kot",
        },
        {
          id: uuidv4(),
          title: "Tulsi Kot",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767619241/1_touguw.jpg",
          alt: "Tulsi Kot",
        },
        {
          id: uuidv4(),
          title: "Tulsi Kot",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767619244/3_rjtlo5.jpg",
          alt: "Tulsi Kot",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "sculptures",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767701564/ChatGPT_Image_Jan_6_2026_05_42_02_PM_hvw2j0.png",
      items: [
        {
          id: uuidv4(),
          title: "Meditation Buddha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620274/1_y9ogf3.jpg",
          alt: "Meditation Buddha",
        },
        {
          id: uuidv4(),
          title: "Meditation Buddha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620275/2_yi0h39.jpg",
          alt: "Meditation Buddha",
        },
        {
          id: uuidv4(),
          title: "Meditation Buddha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620277/3_o7u94q.jpg",
          alt: "Meditation Buddha",
        },
        {
          id: uuidv4(),
          title: "Meditation Buddha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620279/4_eectmu.jpg",
          alt: "Meditation Buddha",
        },
        {
          id: uuidv4(),
          title: "Meditation Buddha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620321/6_yt38wy.jpg",
          alt: "Meditation Buddha",
        },
        {
          id: uuidv4(),
          title: "Meditation Buddha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620318/5_wizckn.jpg",
          alt: "Meditation Buddha",
        },
        {
          id: uuidv4(),
          title: "Minimal Ganesha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767180360/1111_yfcgqr.jpg",
          alt: "Minimal Ganesha",
        },
        {
          id: uuidv4(),
          title: "Minimal Ganesha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768811674/Gemini_Generated_Image_pk6h4zpk6h4zpk6h_b67o8i.png",
          alt: "Minimal Ganesha",
        },
        {
          id: uuidv4(),
          title: "Minimal Ganesha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768811673/WhatsApp_Image_2026-01-19_at_12.56.07_PM_1_nkgirj.jpg",
          alt: "Minimal Ganesha",
        },
        {
          id: uuidv4(),
          title: "Minimal Ganesha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767180359/4444_qs616l.jpg",
          alt: "Minimal Ganesha",
        },
        {
          id: uuidv4(),
          title: "handmade Moderan Art",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620114/7777_arfkme.jpg",
          alt: "handmade Moderan Art",
        },
        {
          id: uuidv4(),
          title: "Minimal Ganesha",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767180365/6666_r0pvhm.jpg",
          alt: "Minimal Ganesha",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Pergolas & Benches",
      displayImgurl:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764334500/garden-pergola-seating-Picsart-AiImageEnhancer_qnjipb.jpg",
      items: [
        {
          id: uuidv4(),
          title: "Stone Pergola",
          image:
            "https://res.cloudinary.com/dl4viyuwh/image/upload/v1764334500/garden-pergola-seating-Picsart-AiImageEnhancer_qnjipb.jpg",
          alt: "Stone Pergola",
        },
        {
          id: uuidv4(),
          title: "Stone Pergola",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768812971/Gemini_Generated_Image_5h4f5s5h4f5s5h4f_xxtuq7.png",
          alt: "Stone Pergola",
        },
        {
          id: uuidv4(),
          title: "Stone Pergola",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620504/1_ztq7mr.jpg",
          alt: "Stone Pergola",
        },
        {
          id: uuidv4(),
          title: "Stone Pergola",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620514/6_j7tz8k.jpg",
          alt: "Stone Pergola",
        },
        {
          id: uuidv4(),
          title: "Stone Pergola",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768590509/ChatGPT_Image_Jan_17_2026_12_37_19_AM_yrvpq1.png",
          alt: "Stone Pergola",
        },
        {
          id: uuidv4(),
          title: "Stone Pergola",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620505/2_axrnwh.jpg",
          alt: "Stone Pergola",
        },
        {
          id: uuidv4(),
          title: "Stone Pergola",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768811674/WhatsApp_Image_2026-01-19_at_12.56.08_PM_1_dkbsop.jpg",
          alt: "Stone Pergola",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Wash Basin",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768815130/ChatGPT_Image_Jan_19_2026_03_01_53_PM_rfsqwa.png",
      items: [
        {
          id: uuidv4(),
          title: "Stone Basin",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620702/1_hkf2mo.jpg",
          alt: "Stone Basin",
        },
        {
          id: uuidv4(),
          title: "Stone Basin",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620705/3_gvfjfc.jpg",
          alt: "Stone Basin",
        },
        {
          id: uuidv4(),
          title: "Stone Basin",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767620708/4_gosuh9.png",
          alt: "Stone Basin",
        },
        {
          id: uuidv4(),
          title: "Stone Basin",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768589632/ChatGPT_Image_Jan_17_2026_12_22_29_AM_ycwtn4.png",
          alt: "Stone Basin",
        },
        {
          id: uuidv4(),
          title: "Stone Basin",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768589150/ChatGPT_Image_Jan_17_2026_12_06_54_AM_vok65z.png",
          alt: "Stone Basin",
        },
        {
          id: uuidv4(),
          title: "Stone Basin",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1768589151/ChatGPT_Image_Jan_17_2026_12_01_24_AM_wkuysy.png",
          alt: "Stone Basin",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Mosaic",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767702311/ChatGPT_Image_Jan_6_2026_05_54_11_PM_mbk8ov.png",
      items: [
        {
          id: uuidv4(),
          title: "Mosaic",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767702521/1_ztzhr3.jpg",
          alt: "Mosaic",
        },
        {
          id: uuidv4(),
          title: "Mosaic",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767702522/2_afzrzp.jpg",
          alt: "Mosaic",
        },
        {
          id: uuidv4(),
          title: "Mosaic",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767702523/3_yl8pnu.jpg",
          alt: "Mosaic",
        },
        {
          id: uuidv4(),
          title: "Mosaic",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767702523/4_banaiz.jpg",
          alt: "Mosaic",
        },
        {
          id: uuidv4(),
          title: "Mosaic",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767702523/6_gieyg9.jpg",
          alt: "Mosaic",
        },
        {
          id: uuidv4(),
          title: "Mosaic",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767702523/5_yozfc7.jpg",
          alt: "Mosaic",
        },
      ],
    },
  ],
  FlooringListItems: [
    {
      id: uuidv4(),
      title: "hand Made Tiles",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767773573/handmade_tiles_desktop_hd_a2rysy.png",
      items: [
        {
          id: uuidv4(),
          title: "Hand Made Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770247/6_rz4qzv.png",
          alt: "Hand Made Tiles",
        },
        {
          id: uuidv4(),
          title: "Hand Made Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770246/5_rpbwa5.jpg",
          alt: "Hand Made Tiles",
        },
        {
          id: uuidv4(),
          title: "Hand Made Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770246/1_muoy5q.png",
          alt: "Hand Made Tiles",
        },
        {
          id: uuidv4(),
          title: "Hand Made Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770248/2_oibveq.png",
          alt: "Hand Made Tiles",
        },
        {
          id: uuidv4(),
          title: "Hand Made Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770245/4_qbzhin.jpg",
          alt: "Hand Made Tiles",
        },
        {
          id: uuidv4(),
          title: "Hand Made Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770245/3_osby6b.jpg",
          alt: "Hand Made Tiles",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Natural Stone Flooring",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767773412/natural_stone_flooring_desktop_hd_qrwvof.png",
      items: [
        {
          id: uuidv4(),
          title: "Natural Stone Floor",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770726/6_gpe1c2.jpg",
          alt: "Natural Stone Floor",
        },
        {
          id: uuidv4(),
          title: "Natural Stone Floor",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770724/3_w3ejuu.jpg",
          alt: "Natural Stone Floor",
        },
        {
          id: uuidv4(),
          title: "Natural Stone Floor",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770725/1_oxzqmk.jpg",
          alt: "Natural Stone Floor",
        },
        {
          id: uuidv4(),
          title: "Natural Stone Floor",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770725/4_dwkpcn.jpg",
          alt: "Natural Stone Floor",
        },
        {
          id: uuidv4(),
          title: "Natural Stone Floor",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770724/2_lif9do.jpg",
          alt: "Natural Stone Floor",
        },
        {
          id: uuidv4(),
          title: "Natural Stone Floor",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770724/2_lif9do.jpg",
          alt: "Natural Stone Floor",
        },
        {
          id: uuidv4(),
          title: "Natural Stone Floor",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767770724/5_iuv73w.jpg",
          alt: "Natural Stone Floor",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Terrazo",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767773765/terrazzo_floor_desktop_hd_jq7bbv.png",
      items: [
        {
          id: uuidv4(),
          title: "Terrazo Flooring",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772019/f_f2smd0.png",
          alt: "Terrazo Flooring",
        },
        {
          id: uuidv4(),
          title: "Terrazo Flooring",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772018/e_imriqh.png",
          alt: "Terrazo Flooring",
        },
        {
          id: uuidv4(),
          title: "Terrazo Flooring",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772019/d_ahkt5e.png",
          alt: "Terrazo Flooring",
        },
        {
          id: uuidv4(),
          title: "Terrazo Flooring",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772018/b_fb0uop.png",
          alt: "Terrazo Flooring",
        },
        {
          id: uuidv4(),
          title: "Terrazo Flooring",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772018/a_nxtll2.png",
          alt: "Terrazo Flooring",
        },
        {
          id: uuidv4(),
          title: "Terrazo Flooring",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772018/c_lifjss.png",
          alt: "Terrazo Flooring",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Bathroom Tiles",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767773960/bathroom_tiles_desktop_hd_lds8is.png",
      items: [
        {
          id: uuidv4(),
          title: "Bath Room Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772193/3_nblc5w.jpg",
          alt: "Bath Room Tiles",
        },
        {
          id: uuidv4(),
          title: "Bath Room Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772193/5_kvu7id.jpg",
          alt: "Bath Room Tiles",
        },
        {
          id: uuidv4(),
          title: "Bath Room Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772194/6_me5gn7.png",
          alt: "Bath Room Tiles",
        },
        {
          id: uuidv4(),
          title: "Bath Room Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772192/2_uvv4bv.jpg",
          alt: "Bath Room Tiles",
        },
        {
          id: uuidv4(),
          title: "Bath Room Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772192/4_cmoztn.jpg",
          alt: "Bath Room Tiles",
        },
        {
          id: uuidv4(),
          title: "Bath Room Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772192/1_zfhp6j.jpg",
          alt: "Bath Room Tiles",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Flooring Tiles",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767774293/flooring_tiles_room_desktop_hd_zcep1u.png",
      items: [
        {
          id: uuidv4(),
          title: "Flooring Floor Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772496/6_gfxpme.jpg",
          alt: "Flooring Floor Tiles",
        },
        {
          id: uuidv4(),
          title: "Flooring Floor Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772495/5_ajt1i8.jpg",
          alt: "Flooring Floor Tiles",
        },
        {
          id: uuidv4(),
          title: "Flooring Floor Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772494/3_iyhkyq.jpg",
          alt: "Flooring Floor Tiles",
        },
        {
          id: uuidv4(),
          title: "Flooring Floor Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772494/4_s93szn.jpg",
          alt: "Flooring Floor Tiles",
        },
        {
          id: uuidv4(),
          title: "Flooring Floor Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772494/2_fuv6co.jpg",
          alt: "Flooring Floor Tiles",
        },
        {
          id: uuidv4(),
          title: "Flooring Floor Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772494/1_uafejo.jpg",
          alt: "Flooring Floor Tiles",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Flooring Wooden Tiles",
      displayImgurl:
        "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767774510/wooden_floor_desktop_hd_riuba8.png",
      items: [
        {
          id: uuidv4(),
          title: "Flooring Floor Wodden Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772718/6_vqt1gb.jpg",
          alt: "Flooring Floor Wodden Tiles",
        },
        {
          id: uuidv4(),
          title: "Flooring Floor Wodden Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772716/5_jmkvkv.jpg",
          alt: "Flooring Floor Wodden Tiles",
        },
        {
          id: uuidv4(),
          title: "Flooring Floor Wodden Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772716/4_fjsm8y.png",
          alt: "Flooring Floor Wodden Tiles",
        },
        {
          id: uuidv4(),
          title: "Flooring Floor Wodden Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772716/1_xehawy.jpg",
          alt: "Flooring Floor Wodden Tiles",
        },
        {
          id: uuidv4(),
          title: "Flooring Floor Wodden Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772716/2_otrtqo.jpg",
          alt: "Flooring Floor Wodden Tiles",
        },
        {
          id: uuidv4(),
          title: "Flooring Floor Wodden Tiles",
          image:
            "https://res.cloudinary.com/dbmv3jdwr/image/upload/v1767772715/3_g1lbck.jpg",
          alt: "Flooring Floor Wodden Tiles",
        },
      ],
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
  elevationData: [
    {
      id: uuidv4(),
      title: "Luxury Villa Elevation",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1765966319/Gemini_Generated_Image_w29r4qw29r4qw29r_ujgdaj.png",
    },
    {
      id: uuidv4(),
      title: "Contemporary Wall Cladding",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1765970300/Gemini_Generated_Image_n435dun435dun435-Picsart-AiImageEnhancer_pxxipa.jpg",
    },
    {
      id: uuidv4(),
      title: "Classic Stone Facade",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1765970633/Gemini_Generated_Image_niq7muniq7muniq7-Picsart-AiImageEnhancer_lkoz1a.png",
    },
    {
      id: uuidv4(),
      title: "Minimal Elevation Design",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1765972087/Gemini_Generated_Image_9603jy9603jy9603_x8p9b7.png",
    },
    {
      id: uuidv4(),
      title: "Architectural Elevation Stone",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1765965244/Gemini_Generated_Image_t3xoovt3xoovt3xo_wuvn0n.png",
    },
    {
      id: uuidv4(),
      title: "landscaping Elevation Stone",
      image:
        "https://res.cloudinary.com/dl4viyuwh/image/upload/v1765973522/Gemini_Generated_Image_a8dmuqa8dmuqa8dm_1_dmj1na.png",
    },
  ],
};
export default mockData;
