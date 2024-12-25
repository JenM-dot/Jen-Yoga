import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import type { GiftCertificate } from '../types';

interface CertificateUploaderProps {
  onUpload: (certificate: Omit<GiftCertificate, 'id'>) => void;
}

export function CertificateUploader({ onUpload }: CertificateUploaderProps) {
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      onUpload({ name, file });
      setName('');
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-serif mb-4">Upload Gift Certificate</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Certificate Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            PDF File
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-sage-600 hover:text-sage-500">
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    type="file"
                    accept="application/pdf"
                    className="sr-only"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    required
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">PDF up to 10MB</p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-sage-600 text-white py-2 px-4 rounded-md hover:bg-sage-700 transition-colors"
        >
          Upload Certificate
        </button>
      </div>
    </form>
  );
}