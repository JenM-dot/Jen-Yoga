import React from 'react';
import { CertificateUploader } from './CertificateUploader';
import { CertificateList } from './CertificateList';
import { ExternalLink } from 'lucide-react';
import { useGiftCertificates } from '../hooks/useGiftCertificates';

interface GiftCertificatesMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GiftCertificatesMenu({ isOpen, onClose }: GiftCertificatesMenuProps) {
  const { certificates, addCertificate } = useGiftCertificates();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="absolute right-0 top-0 h-full w-full max-w-lg bg-sage-50 shadow-xl p-6 overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-serif text-sage-900 mb-6">Gift Certificates</h2>
        <div className="space-y-6">
          <CertificateUploader onUpload={addCertificate} />
          <CertificateList certificates={certificates} />
          
          <div className="border-t border-sage-200 pt-6">
            <a 
              href="https://leshedstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors p-2 rounded-lg hover:bg-sage-100"
            >
              <ExternalLink size={18} />
              <span>Visit Le Shed Studio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}