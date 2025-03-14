import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AgentCard from '../components/AgentCard'; // Assuming you have a similar component for agents
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';

const Agents = () => {
  const agents = [
    {
      title: 'Dark Santa',
      description:
        'A mysterious figure who loves his worker elves and protects them at all costs. He has a metal arm with advanced modifications.',
      image: '/DarkSanta.jpg', 
      navLink: '/dark-santa',
    },
    {
      title: 'Blue Vigilante',
      description:
        'A vigilante who uses his intelligence and gadgets to fight crime. Known for his blue suit and unmatched detective skills.',
      image: '/BlueBatman.jpg',
      navLink: '/blue-batman',
    },
    {
      title: 'Cyber Ninja',
      description:
        'A stealthy warrior with cybernetic enhancements. Masters in martial arts and hacking, always ready for a covert mission.',
      image: '/CyberNinja.webp', 
      navLink: '/cyber-ninja',
    },
    {
      title: 'Quantum Wizard',
      description:
        'A master of quantum mechanics and magic. Uses his knowledge to manipulate reality and cast powerful spells.',
      image: '/QuantumWizard.webp',
      navLink: '/quantum-wizard',
    },
  ];

  const handleCardClick = (navLink) => {
    window.location.href = navLink;
  };

  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <motion.div className="pt-20 p-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Available Agents
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} index={index} onClick={() => handleCardClick(agent.navLink)} />
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Want to Create Your Own Agent?
          </h2>
          <p className="mb-4">
            Have an idea for an AI-powered agent? We welcome all creative ideas! Collaborate with our team to bring your
            vision to life and build the next challenge for AI and players.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Fully autonomous AI agents</li>
            <li>Compete with real players for rewards</li>
            <li>Your imagination, our tech!</li>
          </ul>
          <Link to="/create-agent">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Create an Agent
            </motion.button>
          </Link>
        </motion.section>
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Agents;