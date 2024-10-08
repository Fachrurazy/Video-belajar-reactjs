import { create } from "zustand"
import card1 from "../../../assets/card1.png"
import avatar1 from "../../../assets/Avatar1.png"
import card2 from "../../../assets/card2.png"
import avatar2 from "../../../assets/Avatar2.png"
import card3 from "../../../assets/card3.png"
import avatar3 from "../../../assets/Avatar3.png"
import card4 from "../../../assets/card4.png"
import avatar4 from "../../../assets/Avatar4.png"
import card5 from "../../../assets/card5.png"
import avatar5 from "../../../assets/Avatar5.png"
import card6 from "../../../assets/card6.png"
import avatar6 from "../../../assets/Avatar6.png"
import card7 from "../../../assets/card7.png"
import avatar7 from "../../../assets/Avatar7.png"
import card8 from "../../../assets/card8.png"
import avatar8 from "../../../assets/Avatar8.png"
import card9 from "../../../assets/card9.png"
import avatar9 from "../../../assets/Avatar1.png"

const useProducts = create((set) => ({
    products:
        [
        {
            id: 1,
            title: "Big 4 Auditor Financial Analyst",
            description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            price: 300,
            image: card1,
            rating: 3.5,
            avatar: avatar1,
            name: "Jenna Ortega",
            role: "Senior Accountant",
            company: "Gojek",
        },
        {
            id: 2,
            title: "Big 4 Auditor Financial Analyst",
            description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            price: 300,
            image: card2,
            rating: 3.5,
            avatar: avatar2,
            name: "Jenna Ortega",
            role: "Senior Accountant",
            company: "Gojek",
        },
        {
            id: 3,
            title: "Big 4 Auditor Financial Analyst",
            description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            price: 300,
            image: card3,
            rating: 3.5,
            avatar: avatar3,
            name: "Jenna Ortega",
            role: "Senior Accountant",
            company: "Gojek",
        },
        {
            id: 4,
            title: "Big 4 Auditor Financial Analyst",
            description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            price: 300,
            image: card4,
            rating: 3.5,
            avatar: avatar4,
            name: "Jenna Ortega",
            role: "Senior Accountant",
            company: "Gojek",
        },
        {
            id: 5,
            title: "Big 4 Auditor Financial Analyst",
            description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            price: 300,
            image: card5,
            rating: 3.5,
            avatar: avatar5,
            name: "Jenna Ortega",
            role: "Senior Accountant",
            company: "Gojek",
        },
        {
            id: 6,
            title: "Big 4 Auditor Financial Analyst",
            description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            price: 300,
            image: card6,
            rating: 3.5,
            avatar: avatar6,
            name: "Jenna Ortega",
            role: "Senior Accountant",
            company: "Gojek",
        },
        {
            id: 7,
            title: "Big 4 Auditor Financial Analyst",
            description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            price: 300,
            image: card7,
            rating: 3.5,
            avatar: avatar7,
            name: "Jenna Ortega",
            role: "Senior Accountant",
            company: "Gojek",
        },
        {
            id: 8,
            title: "Big 4 Auditor Financial Analyst",
            description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            price: 300,
            image: card8,
            rating: 3.5,
            avatar: avatar8,
            name: "Jenna Ortega",
            role: "Senior Accountant",
            company: "Gojek",
        },
        {
            id: 9,
            title: "Big 4 Auditor Financial Analyst",
            description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            price: 300,
            image: card9,
            rating: 3.5,
            avatar: avatar9,
            name: "Jenna Ortega",
            role: "Senior Accountant",
            company: "Gojek",
        },
    ],
    selectedProduct: null,
    setSelectedProduct: (product) => set({ selectedProduct: product }),
}))

export default useProducts