import { useState } from 'react';
import type { GiftCertificate } from '../types';

export function useGiftCertificates() {
  const [certificates, setCertificates] = useState<GiftCertificate[]>([]);

  const addCertificate = (newCert: Omit<GiftCertificate, 'id'>) => {
    setCertificates(prev => [...prev, { ...newCert, id: crypto.randomUUID() }]);
  };

  return {
    certificates,
    addCertificate
  };
}