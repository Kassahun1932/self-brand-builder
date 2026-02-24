import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'BSc in Software Engineering',
      institution: 'University of Gondar',
      period: '2019 - 2023',
      description: "Dandeettii pirograamiingii, ijaarsa database fi neetworkii irratti beekumsa bal'aa argadheera."
    },
    {
      degree: 'Barnoota Sadarkaa 2ffaa',
      institution: 'Mana Barnoota Olaanaa Hailemariam Mamo',
      period: '2015 - 2018',
      description: 'Barnoota saayinsii fi herregaa irratti xiyyeeffachuun milkiin xumureera.'
    }
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Barnoota Koo</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="hidden sm:flex flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-slate-900">{item.degree}</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-500 border border-slate-100">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-blue-600 mb-3">{item.institution}</h4>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;