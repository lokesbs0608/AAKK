import React from 'react'
import styles from './style.module.scss'


export default function Slection() {
    const electronicItems = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Smartphone" },
        { id: 3, name: "Headphones" },
        { id: 4, name: "Tablet" },
        { id: 5, name: "Smart TV" },
        { id: 6, name: "Digital Camera" },
        { id: 7, name: "Gaming Console" },
        { id: 8, name: "Wireless Router" },
        { id: 9, name: "External Hard Drive" },
        { id: 10, name: "Smartwatch" },
      ];
  

  return (
    <div >
    <div className={styles.dropdown}>
    <h2 >ElectronicItems</h2>
    <div className={styles.options}>
        {electronicItems?.map((options)=>(
            <div key={options.id}>{options.name}</div>
        ))}
      
    </div>
  </div>
    </div>
    
  
  )
}

