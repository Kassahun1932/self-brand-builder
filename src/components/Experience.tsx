import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Tech Solutions Ethiopia',
      period: '2023 - Amma',
      responsibilities: [
        'Dizaayinii weebsaayitii fi appilikeeshinii daldalaa hojjechuu',
        'Database hordofuu fi fooyyessuu',
        'Garee wajjiin pirojektoota gurguddaa irratti hirmaachuu'
      ]
    },
    {
      role: 'Intern Developer',
      company: 'Ethio Telecom',
      period: "2022 (Ji'a 4)",
      responsibilities: [
        'Sirna hordoffii neetworkii irratti gargaaruu',
        'Coddiiwwan xixiqqoo barreessuu fi qulqulleessuu',
        'Dokumenteeshinii pirojektootaa qopheessuu'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Muxannoo Hojii</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company} | {exp.period}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;