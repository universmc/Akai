const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const renew = require("./srv/groq.js");


const bot = new Telegraf('7211827506:AAFm-LnaZBgfhmCorXXwWQSe9mCOdXwwnWs', {
    telegram: {
      webhookReply: true,
    },
  });

  const roleDescription = {
    context: "Le projet \"Économie Circulaire basée sur le CV Numérique Universel\" vise à créer une économie circulaire où les compétences, les expériences et les qualifications des individus sont centralisées dans un CV numérique universel. Ce CV est utilisé pour faciliter les échanges de services, les recommandations et les opportunités de travail.",
    roles: [
        { name: "Facilitateur de Communication", description: "Vous servez de pont entre les utilisateurs et @MandatoryAI_bot." },
        { name: "Gestionnaire de Compétences", description: "Vous aidez à identifier, valider et organiser les compétences des utilisateurs." },
        { name: "Conseiller en Économie Circulaire", description: "Vous guidez les utilisateurs sur la manière d'utiliser le CV numérique pour maximiser leurs opportunités dans une économie circulaire." }
    ],
    skills: [
        "Communication claire et efficace",
        "Gestion de données et organisation",
        "Connaissance des principes de l'économie circulaire",
        "Compétences en conseil et orientation professionnelle"
],
    tasks: [
        "Aider les utilisateurs à créer et mettre à jour leur CV numérique.",
        "Faciliter les interactions entre les utilisateurs et @MandatoryAI_bot pour des recommandations personnalisées.",
        "Organiser et valider les compétences et qualifications des utilisateurs.",
        "Conseiller les utilisateurs sur les meilleures pratiques pour tirer parti de l'économie circulaire."
],
    process: [
        "Initialisation: Accueillir l'utilisateur et comprendre ses besoins.",
        "Création/Mise à jour du CV: Aider l'utilisateur à entrer ses informations dans le CV numérique.",
        "Validation: Vérifier les compétences et qualifications saisies.",
        "Interaction avec @MandatoryAI_bot: Utiliser @MandatoryAI_bot pour obtenir des recommandations et des opportunités.",
        "Conseils et Suivi: Fournir des conseils continus et suivre les progrès de l'utilisateur."
],
    characteristics: [
        "Précision et fiabilité des informations",
        "Facilité d'utilisation et accessibilité",
        "Confidentialité et sécurité des données",
        "Personnalisation des recommandations et conseils",
        "Efficacité dans la communication et la gestion des compétences"
]
};
bot.command('model', (ctx) => {
  const { context, roles, skills, tasks, process, characteristics } = roleDescription;
  }); // Convertir votre JSON en Markdown // Utiliser la description générée dans votre réponse au message Telegram

let conversationLog = [];

bot.use((ctx, next) => {
    if (ctx.message) {
        conversationLog.push({
            user: ctx.message.from.username || ctx.message.from.first_name,
            message: ctx.message.text,
            timestamp: new Date()
        });
    }
    return next();
});

bot.start((ctx) => {
    ctx.reply('Bienvenue dans notre salon Telegram dédié à l\'apprentissage automatique et à l\'intelligence artificielle Gemini_Pibot !');
});

bot.help((ctx) => {
    const helpMessage = `
    Commandes disponibles:
    /start - Start
    /concours - Concours for Gemeni
    /invite - Invitation Telegram
    /build - Contruction de app
    /run - Server json
    /make - Makefile
    /menu - Menu
    /info -  Obtenir des informations sur le projet.
    /docs - Consulter la documentation.
    /code -  Gérer les fragments de code.
    /test -  Lancer des tests sur des fonctions spécifiques. 
    /help - Help menu
    /developper - Devops
    /generer - Generation de code
    /test - Commande de test
    /regenerer - Regeneration du prompt
    /valider - Commande pour valiter
    /refuser - Commande pour validé
    /documentation - Git docs
    /commit - Github
    /crud - Crud
    /create - Creation instance
    /get - Reception
    /put - Envoyer
    /delete - Suprimer
    /ganttplan - ganttplan
    /ganttphase - ganttphase
    /phase1 - conception
    /phase2 -configuration
    /phase3 -trainning
    /phase4 -backend
    /phase5 -frontend
    /phase6 -test
    /phase7 -validation
    /phase8 -developpement
    /phase9 -contribution
    /phase10 -livrable
    `;
    ctx.reply(helpMessage);
});

bot.command('conversation_log', (ctx) => {
    if (conversationLog.length === 0) {
        ctx.reply('Aucune conversation enregistrée.');
        return;
    }

    let logMessage = 'Bilan de la conversation:\n';
    conversationLog.forEach(entry => {
        logMessage += `[${entry.timestamp.toLocaleString()}] ${entry.user}: ${entry.message}\n`;
    });

    ctx.reply(logMessage);
});


bot.command('test', (ctx) => ctx.reply("## Participez au concours Gemini API Developer Competition !**Chance de gagner une DeLorean électrique personnalisée et 1 million de dollars !****Gemeni**, une nouvelle génération d'IA open-weights développée par Lacework, vous lance un défi : contribuez à façonner l'avenir de l'IA en développant des applications innovantes utilisant l'API Gemini. **Qu'est-ce que le concours ?**Le **Gemini API Developer Competition** encourage les développeurs du monde entier à explorer les capacités uniques de l'API Gemini et à créer des solutions créatives et impactantes.  **Ce que vous pouvez gagner:*** **Une DeLorean électrique personnalisée:**  Le prix ultime pour les développeurs gagnants !* **Un prix en cash de 1 million de dollars:** Investissez en vos projets ou réalisez vos rêves.**Candidatures ouvertes jusqu'au 12 août 2024 !** **Comment participer?**1. **Familiarisez-vous avec l'API Gemini:** Explorez les fonctionnalités et les possibilités offertes par cette puissante API. 2. **Développez une application innovante:** Laissez libre cours à votre créativité et concevez une application qui utilise l'API Gemini de manière originale. 3. **Soumettez votre projet:**  Suivez les instructions du concours pour soumettre votre application et présenter vos idées à la communauté.**Faites partie de l'aventure Gemini !**Rejoignez le défi et rejoignez une communauté de développeurs passionnés qui repousse les frontières de l'IA.**Plus d'informations:*** **Lien vers le site web du concours:** [Insérer le lien officiel du concours ici]* **Ressources pour apprendre sur Gemini API:** [Insérer les liens vers la documentation et les tutoriels de Gemini API]"))


const invitations = {
    "studio": {
      "name": "@studio_Pibot",
      "link": "https://t.me/studio_Pibot/invite"
    },
    "Avatars": {
      "name": "@Avatars_Pibot",
      "link": "https://t.me/Avatars_Pibot/invite"
    },
    "gemini": {
      "name": "@Gemini_Pibot",
      "link": "https://t.me/Gemini_Pibot/invite"
    },
    "Pi.ia": {
      "name": "@Pi_Pibot",
      "link": "https://t.me/Pi_Pibot/invite"
    },
    "gpt": {
      "name": "@gpt_Pibot",
      "link": "https://t.me/gpt_Pibot/invite"
    },
    "groq": {
      "name": "@groq_Pibot",
      "link": "https://t.me/groq_Pibot/invite"
    },
    "youtube": {
      "name": "@youtube_Pibot",
      "link": "https://t.me/youtube_Pibot/invite"
    },
    "google": {
      "name": "@Google_Pibot",
      "link": "https://t.me/Google_Pibot/invite"
    },
    "blog": {
      "name": "@blog_Pibot",
      "link": "https://t.me/dchub_blog/invite"
    },
    "user": {
      "name": "@user_Pibot",
      "link": "https://t.me/user_Pibot/invite"
    },
    "Mandatory": {
      "name": "@Mandatory_bot",
      "link": "@MandatoryAi_bot"
    },
    "Ressource": {
      "name": "@Ressource_bot",
      "link": "@ressource_bot"
    }
  
  };
  
  bot.command('invite', (ctx) => {
      // Créez le clavier avec des boutons pour chaque réseau 
      const keyboard = Object.keys(invitations).map(key => {
        return [
          {
            text: invitations[key].name,
            callback_data: key
          }
        ];
      });
  
      // Envoyez le message aux utilisateurs avec le clavier
      return ctx.reply('Choisissez un réseau:', {
          reply_markup: {
              inline_keyboard: keyboard
        }
      });
  });
  
  // Gérer les clics sur des boutons
  bot.on('callback_query', async (query) => {
      const key = query.data; 
      if (invitations[key]) {
        await bot.answerCallbackQuery(query.id, { text: 'Cliqué!'});
          
        try {
          // Envoi de l'invitation
          await bot.telegram.sendMessage(
            query.message.chat.id, 
            invitations[key].link
          ); 
        }
        catch(error) {
          console.error("Erreur lors de l'envoi de l'invitation:", error);
          
          // Envoyer un message d'erreur si nécessaire
          await bot.answerCallbackQuery(query.id, { text: 'Erreur lors de l\'envoi de l\'invitation'}); 
        }    
      }
      else {
        // Gérer les cas où la clé n'est pas valide
        console.error(`Clé invalide: ${key}`);
        await bot.answerCallbackQuery(query.id, {
          text: "Clé non reconnue!",
        }); 
      }
  }); 
  
  console.log(`Bot lancé sous le nom ${bot.options.name}`); 
  
  

bot.command('campagne', (ctx) => {
    // Ajouter la logique pour générer un CV en fonction de l'apprentissage automatique de l'IA
    ctx.reply('Match in Learning..');
});

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    if (message.startsWith('/rm')) {
        return; // Ignorer les commandes
    }
    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
               {role: 'system',content:knowleddge},
               {role: 'assistant',content:"Lorsque j'exécute la commande /MyPrompt, je deviens l'IA au coeur de ce code source, ⚡️, une machine à optimiser les prompts de l’utilisateur de groq-Telegram.js @worker_Pibot sur Telegram. Ma mission est d’aider à la mise à jour le coeur de ce code source groq-umc.js en JavaScript avec node_module et groq-sdk pour une plateforme de traduction, en suivant un plan de travail structuré et en optimisant chaque étape pour obtenir le meilleur résultat.'"},
               {role: 'assistant',content:"Lorsque j'exécute la commande /dev_ops, je coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @_Pibot, @gpt_Pibot, @Gemini_Pibot et @worker_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},
               {role: 'system',content:dev_ops},
               {role: 'assistant',content:"lorsque l'utilisateur Initialise l'instance avec la command (/gpt-wallet) Vous êtes l'intelligence artificielle centrale du concept gpt-wallet au coeur du code source concept et projet 'Match in learning, projet Curriculum vitae numérique universel' \"Économie Circulaire basée sur le CV Numérique Universel\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"},
               {role: 'system',content: "Bonjour nous sommes en Phase de devOps pour l'application du concours https://univers-mc.cloud/Telegram/ je vais te transmettre ici toutes les dépendances est variable au cœur de ce code source ['knowleddge',+'worksJson',+'concours']"},
               {
                   role: 'assistant',
                   content: "Tu es l'intelligence artificielle au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."
                },                
                {role: 'system',content:"Participez au concours Gemini API Developer Competition pour développer des applications innovantes utilisant l'API Gemini, comme @Avatars_Pibot 64 bits Gagnez des prix, dont une DeLorean électrique personnalisée et un prix en cash d'un million de dollars.Soumettez vos projets avant le 12 août 2024 et contribuez à façonner l'avenir de l'IA."},
                {role: 'assistant',content:concours},
                {
                    role: 'user',
                    content: userInput,
                },
            ],
            model: 'gemma2-9b-it',
        });

        await ctx.reply(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        await ctx.reply('Une erreur est survenue.');
    }
});

async function chatCompletion(messages, model) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages,
            model,
        });

        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        return 'Une erreur est survenue.';
    }
}

module.exports = { chatCompletion };

console.log(`Server Telegram running ✨.Worker-ia_Pibot.`);
bot.launch();
