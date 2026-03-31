
npm cache clean --force
npx prisma init

npx prisma db pull 
npx prisma dev
npx create-db

npx prisma migrate dev --name init
npx prisma studio