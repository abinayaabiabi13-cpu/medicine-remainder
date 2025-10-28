import React from "react";

export default function Footer(){
  return (
    <footer style={{textAlign:"center", padding:"18px 0", color:"#666", marginTop:30}}>
      © {new Date().getFullYear()} Medicine Reminder — Built with ❤️
    </footer>
  );
}
