import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TeamCreateForm from '../../components/Create/TeamCreateForm'; // ✅ 컴포넌트만 불러옴

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
