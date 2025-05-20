// src/pages/Create/index.jsx

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TeamCreateForm from '../../components/Create/TeamCreateForm';

function CreatePage() {
  return (
    <div className="manage-wrapper" style={{ paddingTop: '24px', paddingBottom: '100px' }}>
      <Header />
      <main className="manage-container">
        <TeamCreateForm />
      </main>
      <Footer />
    </div>
  );
}

export default CreatePage;
