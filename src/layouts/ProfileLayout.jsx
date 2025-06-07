import React, { useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const ProfileLayout = ({ role, auth, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!auth?.token) {
      const redirectPath = role === 'handyman' ? '/login/handyman' : '/login';
      navigate(redirectPath);
    }
  }, [auth, role, navigate]);

  if (!auth?.token) return null;

  // Liens personnalisés par rôle
  const menuLinks = role === 'handyman'
    ? [
        { to: '/handyman/dashboard', label: 'Dashboard' },
        { to: '/handyman/profile', label: 'Profil' },
        { to: '/logout/handyman', label: 'Déconnexion' },
      ]
    : [
        { to: '/customer/dashboard', label: 'Dashboard' },
        { to: '/customer/profile', label: 'Profil' },
        { to: '/logout', label: 'Déconnexion' },
      ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Menu latéral */}
      <aside style={{
        width: '220px',
        backgroundColor: '#333',
        color: '#fff',
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '1rem' }}>
          {role === 'handyman' ? 'Espace Prestataire' : 'Espace Client'}
        </h2>

        {menuLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: location.pathname === link.to ? '#4FD1C5' : '#fff',
              textDecoration: 'none',
              fontWeight: location.pathname === link.to ? 'bold' : 'normal',
              padding: '0.5rem 0',
            }}
          >
            {link.label}
          </Link>
        ))}
      </aside>

      {/* Contenu principal */}
      <main style={{
        flexGrow: 1,
        padding: '2rem',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
      }}>
        {children}
      </main>
    </div>
  );
};

export default ProfileLayout;
