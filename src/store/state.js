import Home from '../views/Home.vue'
import Slide from '../views/Slide.vue'
import Sobre from '../views/Sobre.vue'
export default {
  appLogoImg: require('../assets/Img/Logo/Principal.png'),
  appNavLinks: [
    {
      id: '',
      text: 'Home',
    },
    {
      id: 'about',
      text: 'Sobre',
    },
    {
      id: 'services',
      text: 'Serviços',
    },
    {
      id: 'contact-us',
      text: 'Fale Conosco',
    },
    {
      id: 'contact',
      text: 'Contato',
    }
  ],
  router: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      text: 'Home',
    },
    {
      path: '/Sobre',
      name: 'Sobre',
      component: Sobre,
      text: 'Sobre',
    },
    {
      path: '/Slide',
      name: 'Slide',
      component: Slide,
      text: 'Slide',
    }
  ],
  appNavSocialNetwork: [
    {
      id: 'https://api.whatsapp.com/send?phone=5544991567410&text=Olá, vim através do site...',
      icon: 'fab fa-whatsapp',
    },
    {
      id: 'https://www.facebook.com/bdsSistema',
      icon: 'fab fa-facebook-f',
    },
    {
      id: '#',
      icon: 'fab fa-instagram',
    },
    {
      id: '#',
      icon: 'fab fa-linkedin',
    },
    {
      id: '#',
      icon: 'fab fa-telegram-plane',
    },
  ],
  appHomeDescription: 'A necessidade é a mãe da inovação!',
  appCategoryTitle: 'Adventure idea!',
  appCategoryBoxs: [
    {
      icon: require('../assets/Icons/serv-1.png'),
      title: 'complete guide',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?',
      id: '#',
      button: 'Saiba Mais'
    },
    {
      icon: require('../assets/Icons/serv-2.png'),
      title: 'custom packages',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?',
      id: '#',
      button: 'Saiba Mais'
    },
    {
      icon: require('../assets/Icons/serv-3.png'),
      title: 'family trips',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?',
      id: '#',
      button: 'Saiba Mais'
    },
  ],
  appServicesTitle: 'Nossos Serviços',
  appServicesBoxs: [
    {
      icon: require('../assets/Icons/serv-1.png'),
      title: 'complete guide',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?',
      id: '/Sobre',
      button: 'Saiba Mais'
    },
    {
      icon: require('../assets/Icons/serv-2.png'),
      title: 'custom packages',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?',
      id: '/Slide',
      button: 'Saiba Mais'
    },
    {
      icon: require('../assets/Icons/serv-3.png'),
      title: 'family trips',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?',
      id: '#',
      button: 'Saiba Mais'
    }
  ],
  servicesTitle: 'Conheça nossos serviços:',
  services: [
    {
      title: 'Site comercial',
      description:
        'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      icon: require('../assets/Icons/users-solid.png'),
    },
    {
      title: 'Sistemas em geral',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      icon: require('../assets/Icons/baby-solid-roxo.png'),
    }
  ],
  appContactTitle: 'Contato',
  appMapsAddress: [
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.2963898003763!2d-51.798105185493405!3d-23.485831564691406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecc573622513fb%3A0x95582e31a111c86b!2sEdif%C3%ADcio%20Centro%20comercial%20Marialva!5e0!3m2!1spt-BR!2sbr!4v1639406418675!5m2!1spt-BR!2sbr'
  ],
  appFooterLogo: require('../assets/Img/Logo/Principal.png'),
  appFooterDescription:
    'Atuando desde 2002 no mercado de software, agregando experiência e tecnologia para nossos colaboradores!',
  appFooterTitleContact: 'Contato',
  appFooterContact: [
    {
      id: 'tel:+554499972-8673',
      text: '+55 (44) 99972-8673',
      icon: 'fas fa-phone',
    },
    {
      id: 'tel:+554499961-5259',
      text: '+55 (44) 99961-5259',
      icon: 'fas fa-phone',
    },
    {
      id: 'tel:+55443232-6083',
      text: '+55 (44) 3232-6083',
      icon: 'fas fa-phone',
    },
    {
      id: 'tel:+55443015-2439',
      text: '+55 (44) 3015-2439',
      icon: 'fas fa-phone',
    },
    {
      id: 'mailto:sac@infobds.com.br',
      text: 'sac@infobds.com.br',
      icon: 'fas fa-envelope',
    },
    {
      id: 'mailto:suporte@infobds.com.br',
      text: 'suporte@infobds.com.br',
      icon: 'fas fa-envelope',
    }
  ],
  appFooterTitleSocialNetwork: 'Siga-nos',
  appSocialNetwork: [
    {
      id: 'https://api.whatsapp.com/send?phone=5544991567410&text=Olá, vim através do site...',
      text: 'WhatsApp',
      icon: 'fab fa-whatsapp',
    },
    {
      id: 'https://www.facebook.com/bdsSistema',
      text: 'Facebook',
      icon: 'fab fa-facebook-f',
    },
    {
      id: '#',
      text: 'Instagram',
      icon: 'fab fa-instagram',
    },
    {
      id: '#',
      text: 'Linkedin',
      icon: 'fab fa-linkedin',
    },
    {
      id: '#',
      text: 'Telegram',
      icon: 'fab fa-telegram-plane',
    },
  ],
  // appImgPageTittle: 'PDV WEB',
  appImgPageBoxs: [
    {
      icon: require('../assets/Icons/serv-1.png'),
      title: 'Sobre',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?',
      id: '#',
      button: 'Saiba Mais'
    },
    {
      icon: require('../assets/Icons/serv-1.png'),
      title: 'Slide',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?',
      id: '#',
      button: 'Saiba Mais'
    },
  ],
  appFooterCredit: 'Desenvolvido por BDS - Informática!',
  floatButtonLink:
    'https://api.whatsapp.com/send?phone=5544991567410&text=Olá, vim através do site...',
  floatButtonEffect: () => {
    const a = document.createElement('a')
    a.href =
      'https://api.whatsapp.com/send?phone=5544991567410&text=Olá, vim através do site...'
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  },
  floatButtonIcon: require('../assets/Icons/whatsapp-brands.svg')
}
