import { useState } from 'react';
import { WhatsAppIcon } from '../shared/InlineIcons.jsx';
import { brandConfig } from '../../data/content.js';

function FastQuoteCard() {
  const [propertyType, setPropertyType] = useState('Hogar / Depto');
  const [service, setService] = useState('Destape de cañerías / WC');
  const [comuna, setComuna] = useState('Viña del Mar (Plan)');
  const [isUrgent, setIsUrgent] = useState(false);

  const generateWhatsAppUrl = () => {
    let msg = `Hola ${brandConfig.name}, necesito cotizar una visita técnica para ${propertyType}.\n`;
    msg += `• Problema: ${service}\n`;
    msg += `• Sector: ${comuna}\n`;
    if (isUrgent) {
      msg += `• Urgencia: SÍ, requiero atención prioritaria.\n`;
    }
    msg += `¿Podrían indicarme disponibilidad y costo estimado?`;

    const cleanPhone = brandConfig.phoneCall.replace(/\D/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fast-quote-card" id="cotizador">
      <span className="card-badge">Cotizador Rápido</span>
      <h2 className="quote-title">Solicita tu visita técnica</h2>
      <p className="quote-desc">Coordinamos tu atención y diagnóstico en terreno en minutos vía WhatsApp.</p>

      {/* Segment tabs */}
      <div className="type-tabs" role="tablist">
        <button
          type="button"
          className={`type-tab-btn ${propertyType === 'Hogar / Depto' ? 'active' : ''}`}
          onClick={() => setPropertyType('Hogar / Depto')}
        >
          🏠 Residencial
        </button>
        <button
          type="button"
          className={`type-tab-btn ${propertyType === 'Comunidad / Comercial' ? 'active' : ''}`}
          onClick={() => setPropertyType('Comunidad / Comercial')}
        >
          🏢 Edificio / Local
        </button>
      </div>

      {/* Problem Selector */}
      <div className="form-group">
        <label className="form-label" htmlFor="serviceSelect">
          ¿Cuál es el problema principal?
        </label>
        <select
          className="form-select"
          id="serviceSelect"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="Destape de cañerías / WC">Destape de cañerías, WC o lavaplatos</option>
          <option value="Fuga de agua visible u oculta">Fuga o filtración de agua en muro/piso</option>
          <option value="Mantención / Reparación de Calefont">Calefont (no enciende o sin agua caliente)</option>
          <option value="Cambio de grifería o llaves">Cambio o reparación de griferías y llaves</option>
          <option value="Remodelación o renovación de redes">Instalación nueva o remodelación de cañerías</option>
        </select>
      </div>

      {/* Location Selector */}
      <div className="form-group">
        <label className="form-label" htmlFor="comunaSelect">
          ¿En qué sector te encuentras?
        </label>
        <select
          className="form-select"
          id="comunaSelect"
          value={comuna}
          onChange={(e) => setComuna(e.target.value)}
        >
          <option value="Viña del Mar (Plan)">Viña del Mar — Plan</option>
          <option value="Viña del Mar (Cerros / Miraflores)">Viña del Mar — Cerros / Miraflores</option>
          <option value="Reñaca">Reñaca / Jardín del Mar</option>
          <option value="Concón">Concón (Costa y Bosques)</option>
          <option value="Gómez Carreño / Quilpué">Gómez Carreño / Quilpué</option>
        </select>
      </div>

      {/* Emergency checkbox */}
      <div className="emergency-check">
        <input
          type="checkbox"
          id="urgencyCheck"
          checked={isUrgent}
          onChange={(e) => setIsUrgent(e.target.checked)}
        />
        <label htmlFor="urgencyCheck">
          <b>¡Es una emergencia!</b> Necesito llegada inmediata o fuera de horario
        </label>
      </div>

      {/* WhatsApp CTA */}
      <a
        className="btn-quote-send"
        href={generateWhatsAppUrl()}
        target="_blank"
        rel="noopener"
      >
        <WhatsAppIcon size={20} />
        Pedir presupuesto por WhatsApp
      </a>
      <p className="quote-footer-text">
        🔒 Sin costo de diagnóstico si realizas la reparación con nosotros.
      </p>
    </div>
  );
}

export default FastQuoteCard;
