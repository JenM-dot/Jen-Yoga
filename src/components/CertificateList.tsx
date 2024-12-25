import React from 'react';
import { FileText } from 'lucide-react';
import type { GiftCertificate } from '../types';

interface CertificateListProps {
  certificates: GiftCertificate[];
}

export function CertificateList({ certificates }: CertificateListProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-serif mb-4">Your Gift Certificates</h3>
      {certificates.length === 0 ? (
        <p className="text-gray-500">No certificates uploaded yet.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="border border-gray-200 rounded-lg p-4 flex items-center gap-4"
            >
              <FileText className="text-sage-500" size={24} />
              <div>
                <h4 className="font-medium">{cert.name}</h4>
                <button
                  onClick={() => window.open(URL.createObjectURL(cert.file))}
                  className="text-sm text-sage-600 hover:text-sage-700"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}