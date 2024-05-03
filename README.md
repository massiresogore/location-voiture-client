# CHAQUE COMPOSANT DOIVENT ETRE INDEPENDANT  
- installation de react hoo form
npm install react-hook-form
- installation de zod, framework de validation input
npm install zod

-   hook form resolver(permet d'afficher les erreurs)
npm install @hookform/resolvers

-   react hoot toast pour les notification
npm install react-hot-toast

-   React query , react devtool
et insertion deagence

-   npm install styled-components

-   Delay
npm i delay, ceci permet de cree un delai

-   Skeleton loding
npm i react-loading-skeleton , permet de simuller un loader

-   picture random
https://picsum.photos/

-   interface vs type
type on ajoute pas des propriété
interface on peut ajouter des propriété

-   markdown editor
npm install --save react-simplemde-editor easymde

-   image upload depuis bytes[] java api
si get est :
         queryFn: async()=> await  
         axios.get("http://localhost:8080/api/v1/automobile/1/images")

et get de backend est:
 @GetMapping("/{automobileId}/images")
    public ResponseEntity<?> imagesByAutomobile(@PathVariable Long automobileId) throws IOException {
        Automobile automobile = this.automobilRepository.getReferenceById(automobileId);

        List<byte[]> images = service.downloadImagesFromFileSystem(automobile);
        List<String> base64Photos = new ArrayList<>();

        for(byte[] bites: images){
            String base64Photo = Base64.encodeBase64String(bites);
            base64Photos.add(base64Photo);
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(base64Photos);
    }

l'affichage est :

    {data?.data.map((image:any, index: number)=> 
        <img key={index} src={`data:image/jpg;base64, ${image}`} alt="" />
    )}
- React icon pour les icon
  npm i react-icons
- radix ui
npm install @radix-ui/themes, permet d'utiliser 
des composants à la place des éléments
  * on implement le css

- inspecté puis computed , font family pour voir le font 
par défault
pour utiliser nextfont de  on met ça dans layout
  variable: '--font-inter',
  puis       <body className={inter.variable}>

- interface Prop
ceci
interface Props {
    status: Vehiculetatus
}
équivaut à
{status}:{status:Vehiculetatus}

- record TypeScript <key, value>
const statusMap: Record<
Vehiculetatus, 
  { label: string, color: 'red' | 'violet' | 'green' }
> = {
  OCCUPE: { label: 'Occupé', color: 'red' },
  LIBRE: { label: 'Libre', color: 'green' },
};
- installation de moment js
npm i moment, perrmet de gerer les date et heures 

- formule de calcul de pourcentage

Imaginons que vous souhaitiez connaître le pourcentage
de 15 filles d’une classe de 3e comptant 25 élèves. 15 
est la valeur partielle (le nombre de filles). La valeur
totale désigne les 25 élèves.



Multipliez la valeur partielle par 100, puis divisez par la
valeur totale. Soit (15×100) / 25.
Le pourcentage sera donc égal à 1500 /25 = 60 %
- react markdown pour afficher les paragraphe écrit en markdown
npm i react-markdown, installer avec sudo, je ne sais pas pourquoi😜

- dynamic, permet le lazy loading d'un composant client dans
une approche server
en l'activant , on dit à nextJs de ne pas  l'importer dans le server

- refactore de l'importation du code
rassembler les importation des composants qui ont le meme
dossier dans un fichier index.tsx
- shift + command + P, puis on ecrit >organize import puis
valide, supprime les import inutile

- _controllers, cette écriture permet à nextjs de ne pas
prendre en compte ce dossier comme lien dans url

## POURCENTAGE formule:
15 réservations pour 25 voitures
15 * 100 / 25
- choper le nombr de reservation, voiture, camion,motos
- choper le total, de voiture, camion et moto
- calculer lepourcentage et afficher

10 réservation pour agence de parie qui compte 20 vehicule
10*100 /20
- choper le nombr de reservation de chaque agence
- choper le total des automobile de chaque agence
- calculer lepourcentage de chaque agence


nombreReservation * 100 / total de voiture;

- calcul le prix total de la diffrecence entre 
une date
SELECT SUM(DATEDIFF(date_fin, date_debut) * prix_journalier) as total from reservation;

-  export const dinamic = 'force-dynamique', 
permet a next de desactivé le rendu static 
et mettre le rendu dynamique
const revalidate = 0, ou =60, rafraichi à 0s ou 60s

- router.refresh(), rafraichit la page
## Authentification NEXT
    npm install next-auth

- ╰─ openssl rand -base64 32, crée une clée avec plusieur
caratères 
Ht7kfV75jgwYqQQTUjUU6bcipiPXjSyA3BJS12HBA1Y=
- ceci
http://localhost:3000/api/auth/signin
, permet de se connecter a google

### use session, permet de récupere lutilisateur connecter
  const {status, data:session} = useSession();
on le cree
const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

on l'applique dans layout
<body className={inter.variable}>
<AuthProvider>
</AuthProvider>
</body>

- erreur de undefied et null
<Avatar src={session?.user?.image!} alt="user image"/>
il faut mettre ! pour que typeScript accepte limage 
null or string


# Authentication vide 8, mosh next
    @layer utilities {
        .nav-link {
            @apply text-zinc-500 hover:text-zinc-800 transition-colors;
        }
    }
on crée un composant css réutilisable on l'aplique

    className={classnames({
        "nav-link": true,
        "!text-zinc-900": link.href === currentPath,
    })}
le !, signifie important
-   ajouter un skeleton au login composant
- 
# création de middleware , le fichier doit se trouver dans la racine,
     export { default } from 'next-auth/middleware';
        export const config = {
            matcher: [
            '/issues/new',
            '/issues/edit/:id+'
            ]
        }
dans middleware.ts
ceci permet dempecher ces liens si on est pas connecter
-   
- 
# SESSION récupération de session on fait
    const authOptions: NextAuthOptions = {
        adapter: PrismaAdapter(prisma),
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            }),
        ],
        session: {
            strategy: 'jwt',
        },
    };
on exporte dabord le auth dans un fichier authOption.ts
puis on l'utilise dans la route.ts


    const handler = NextAuth(authOptions);
    
    export { handler as GET, handler as POST }
ici on ustilise la session


    const session = await getServerSession(authOptions);
     {session && (.....
ceci veut dire si la session existe on affiche sinon on affiche pas 

#   sécurisé les api on applique ça dans tous les apis 
# nécessitant dêtre sécurisé
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({}, { status: 401 });

## comment utiliser le select avec radix
confer page issue/id/assignSelect

# PRISMA 
prisma est seulement disponible dans un composant server

# API avec prisma
    export async function GET(request: NextRequest) {
        const users = await prisma.user.findMany({ orderBy: { name: 'asc' } });
        return NextResponse.json(users);
    }
pour crée un api il faut cree un dossier api/route.ts
consommé cette api

    const useUsers = () =>
        useQuery<User[]>({
        queryKey: ["users"],
        queryFn: () =>
        axios.get("/api/users").then((res) => res.data),
        staleTime: 60 * 1000, //60s
        retry: 3,
    });
-   UseQuery, pourquoi on utilise pas useEffet(), parce que ça ne permet pas
de gerer les erreur ou mêmme de réessayé si la requette à échoué,
et il ne peut pas gerer le cache

- renommé une importation on utilise 'as' exp:


    import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query';

reactQueryClientProvider, utilise react Context pour permettre le partage des ficher
dans toute l'application
-   staleTime de ReactQuery permet refetechter. exp: 60 * 1000, apres 60s il ressait
  - retry=== reessayé

# Relation entre issue et User
    model Issue {
        id               Int      @id @default(autoincrement())
        title            String   @db.VarChar(255)
        description      String   @db.Text
        status           Status   @default(OPEN)
        createdAt        DateTime @default(now())
        updatedAt        DateTime @updatedAt
        assignedToUserId String?  @db.VarChar(255)
        assignedToUser   User?    @relation(fields: [assignedToUserId], references: [id])
    }
    model User {
        id             String    @id @default(cuid())
        name           String?
        email          String?   @unique
        emailVerified  DateTime?
        image          String?
        accounts       Account[]
        sessions       Session[]
        assignedIssues Issue[]
    }
# Possibilité de mettre optionel une column de validation zod 😀
    export const patchIssueSchema = z.object({
        assignedToUserId: z
        .string()
        .min(1, "AssignedToUserId is required.")
        .max(255)
        .optional()
        .nullable(),
    });
# Pour tester il faut désactiver la sécurité api par les commentaire //

# Crée une clée d'interface basé sur le schama de Issue 😘
    type Issue = {
        id: number;
        title: string;
        description: string;
        status: $Enums.Status;
        createdAt: Date;
        updatedAt: Date;
        assignedToUserId: string | null;
    }
    export interface IssueQuery {
        status: Status;
        orderBy: keyof Issue;
        page: string;
    }
# et le collumn est défini
    
    export interface IssueQuery {
        status: Status;
        orderBy: keyof Issue;
        page: string;
    }
    const columns: {
        label: string;
        value: keyof Issue;
        className?: string;
        }[] = [
                { label: 'Issue', value: 'title' },
                {label: 'Status',value: 'status',className: 'hidden md:table-cell'},
                {label: 'Created',value: 'createdAt',className: 'hidden md:table-cell'},
            ];

# La syntax de duplication de parametre url
    interface Props {
        searchParams: IssueQuery,
        issues: Issue[]
    }
    const searchParams = useSearchParams();
    searchParams.get('orderBy')
    <NextLink
        href={{
            query: {
            ...searchParams,
            orderBy: column.value,
            },
        }}
    >
        {column.label}
    </NextLink>
# Récupérer les parametre d'une url
    const searchParams = useSearchParams();
    searchParams.get('orderBy')
# Model de demande à tchat gpt pour crée un record sql
    Given the following prisma model, generate SQL statement to 
    insert 20 records in the issues table. Use real-world titles 
    and descriptions for issues. Status can be OPEN, IN_PROGRESS 
    or CLOSED. Descriptions should be a paragraph long.
    Provide different values for the createdAt and updatedAt
    model Issue {
        id               Int      @id @default(autoincrement())
        title            String   @db.VarChar(255)
        description      String   @db.Text
        status           Status   @default(OPEN)
        createdAt        DateTime @default(now())
        updatedAt        DateTime @updatedAt
    }
    i asked for real title and description
# Filtrage 
# Pagination suis
# nouvelle issue (Latest Issue)
# EAGER LOADIN
    const issues = await prisma.issue.findMany({
        orderBy: { createdAt: 'desc' },
                take: 5,
                include: {
                    assignedToUser: true, //EAGER loading, permet de récuperr aussi l'utilisateur associé
        },
    });
# Issue summary (ex: dashboard de voiture)
on ramène dans la page principale ("/")

# Rechart
    npm install recharts
pour modifier la couleur d'un chart il faut inspecter le css dans 
le navigateur et rechercher accent, puis pour l'appliquer

    style={{ fill: 'var(--accent-9)' }}
# les charts et issue summary sont mis dans dans la page ("/")
# chauqe page doit avoir son propre titre
    export const metadata: Metadata = {
        title: 'Issue Tracker - Dashboard',
        description: 'View a summary of project issues'
    };
pour générer dynamiquement les titres

    export async function generateMetadata({ params }: Props) {
    const issue = await fetchUser(parseInt(params.id));
    
    return {
        title: issue?.title,
        description: 'Details of issue ' + issue?.id
        }
    }
# CREATOION DE CACHE (dans issue détail)
    const fetchUser = cache((issueId: number) => prisma.issue.findUnique({ where: { id: issueId }}));
    const issue = await fetchUser(parseInt(params.id));
# AFFICHAGE DE LOG pour vérifier le cache, qui permet de realiser un seul fetch
    const prismaClientSingleton = () => {
        return new PrismaClient({
        log: ['query']
        })
    }

# git filter repo, permet de remove un fichier dans listoriue de git
https://github.com/newren/git-filter-repo , lien principale
https://github.com/newren/git-filter-repo/blob/main/git-filter-repo , lien du fichier à télécharger
et le fichier se trouve dans 
git-filter-repo.txt
et il faut le mettre dans la racine
il faut le renommer en
git-filter-repo.py

# la commande d'exclure .env
    python3 git-filter-repo.py --path .env --invert-path --force

IMAGE
<AgenceList result={result} isPending={isPending}/>  
<img src={`data:image/jpg;base64, ${data?.data}`} alt="" />
 <img src="http://localhost:8080/api/v1/automobile/image/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg" alt="" />

<img src={`data:image/jpg;base64, ${data?.data}`} alt="" /> 

# Sentry , pour gerer les erreur
le site
https://afrimeta.sentry.io/projects/location-voiture/getting-started/
npx @sentry/wizard@latest -i nextjs

# planette scale pour gerer la base de donnée
    https://planetscale.com/


#               CONCLUSION

##  FORMULAIRE
    npm install react-hook-form
    npm install zod
    npm install @hookform/resolvers
-   le formulaire est géré par réact hooh Form
- le formulaire est validé par zod
- la validation de zod dans react hook form est rendu possible
grace à npm install @hookform/resolvers
    

### NOTIFICATION
      npm install react-hot-toast
la notification est géré par react hoot toast

### DELAY
    npm i delay
on installe le delay pour stumuler un affichage de la page
pour voir le skeleton

### SKELETON 
    npm i react-loading-skeleton
permet d'afficher une page vierge agréable avant l'arriver
de la data en état de is loading.

### MARKDOWN 
    npm install --save react-simplemde-editor easymde
cette dépendance permet de crée un markdown facilement avec 
reac

### RADIX UX
    npm install @radix-ui/themes
    npm i react-icons
le framework css radix, et react icon pour les icone react

### MOMENTJS
    npm i moment
permet de gerer les affichages des heures



# location-voiture-client
