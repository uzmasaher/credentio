// "use client";

// import { HiOutlineTrash } from "react-icons/hi";

// import React from "react";
// import PasswordList from "./PasswordList";

// const RemoveBtn = (props: { id: any; }) => {
//   const removePassword = async () => {
//     const confirmed = window.confirm("Are you sure?");

//     if (confirmed) {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/contact?id=${props.id}`,
//           {
//             method: "DELETE",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.ok) {
//           console.log(`Password with ID ${props} deleted successfully`);
//           <PasswordList />
//           window.location.reload();
//         } else {
//           const data = await response.json();
//           console.error(`Error deleting password: ${data.message}`);
//         }
//       } catch (error) {
//         console.error("Error during delete request:", error);
//       }
//     }
//   };

//   return (
//     <button
//       className="px-2 py-2 rounded-full shadow-lg ring-2 ring-violet-50 text-red-500 hover:text-white hover:bg-red-400 bg-violet-100 dark:text-red-400  dark:bg-black  dark:hover:text-black dark:hover:bg-red-400"
//       onClick={removePassword}
//     >
//       <HiOutlineTrash size={24} />
//     </button>
//   );
// };
// export default RemoveBtn;
