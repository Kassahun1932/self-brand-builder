import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl -rotate-3" />
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d2edba82-1205-4295-8951-6b54111c3a4f/profile-placeholder-04311c9b-1771957312654.webp"
                alt="Profile"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-square"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Waa'ee Koo <span className="text-blue-600">Gabaabumatti</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Ani dargaggeessa kalaqa haaraa uumuuf fedhii guddaa qabudha. Barnoota kootiin akkasumas muxannoo hojii kootiin dandeettii hedduu horadheera.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Galmi koo inni guddaan beekumsa koo fayyadamuun hawaasa kootiif gumaacha gochuudha. Hojii gareen hojjetamu irratti dandeettii gaarii qaba.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-2xl text-blue-600">5+</h4>
                <p className="text-slate-500 text-sm">Pirojektoota</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-2xl text-blue-600">2+</h4>
                <p className="text-slate-500 text-sm">Waggaa Muxannoo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;