import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const users = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // });
  // users.forEach((user) => {
  //   console.log("--------------------------------");
  //   console.log(`User: ${user.name}`);
  //   console.log(`Email: ${user.email}`);
  //   user.posts.forEach((post, i) => {
  //     console.log(`${i}. ${post.title} ${post.content}`);
  //   });
  // });

  // Crear usuario
  const newUser = await prisma.user.create({
    data: {
      name: "Luis",
      email: "Luis@gmail.com",
    },
  });
  console.log(newUser);
}

main();

// ----------------------------------------------------------------
// Crear usuario
//   const newUser = await prisma.user.create({
//     data: {
//       name: "Juan",
//       email: "juan@gmail.com",
//     },
//   });
//   console.log(newUser);
// ----------------------------------------------------------------
// Bucar usuarios
//   const users = await prisma.user.findMany();
//   console.log(users);
//   users.map((users) => {
//     console.log(`${user.id} ${user.name}`);
//   });
// ----------------------------------------------------------------
// Buscar usurio
// const user = await prisma.user.findFirst({
//   where: {
//     id: 2,
//   },
// });
// console.log(user);
// ----------------------------------------------------------------
// Actualizar usuario
// const userUptade = await prisma.user.update({
//   where: {
//     id: 2,
//   },
//   data: {
//     lastname: "Gonzalez",
//   },
// });
// console.log(userUptade);
// ----------------------------------------------------------------
// Manejo de errores y elimnar usuarios
// try {
//   const user = await prisma.user.delete({
//     where: {
//       id: 1,
//     },
//   });
//   console.log(user);
//   const users = await prisma.user.findMany();
//   console.log(users);
// } catch (error) {
// console.log(error.meta.cause);
//   if (error.code === "P2025") {
//     console.log("Usuario no encontrado");
//   }
// }
// ----------------------------------------------------------------
// Creando un usuario con un post
// const newUser = await prisma.user.create({
//   data: {
//     name: "Marcos",
//     email: "Marcos123@gmail.com",
//   },
// });
// console.log(newUser);

// const newPost = await prisma.post.create({
//   data: {
//     title: "Mi primer publicacion",
//     content: "este es mi primer post",
//     // author: {
//     //   connect: {
//     //     id: newUser.id,
//     //   },
//     // },
//     authorId: newUser.id,
//   },
// });
// console.log(newPost);
// ----------------------------------------------------------------
// Creando un usuario con un post de otra forma
// const newUser = await prisma.user.create({
//   data: {
//     name: "donna",
//     email: "donna@gmail.com",
//     post: {
//       create: {
//         title: "Tutorial de prisma",
//         content: "para hacer este tutorial...",
//       },
//     },
//   },
// });
// console.log(newUser);

// const posts = await prisma.post.findMany();

// console.log(posts);
