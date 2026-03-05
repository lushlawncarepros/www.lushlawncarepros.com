import React from 'react';

interface VisualAuditProps {
    isWaitlist: boolean;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fileUrlsPreview: { file: File, url: string }[];
    removeFile: (fileToRemove: File) => void;
}

export const VisualAudit: React.FC<VisualAuditProps> = ({
    isWaitlist, handleFileChange, fileUrlsPreview, removeFile
}) => {
    if (isWaitlist) return null;

    return (
        <div className="border border-lush-emerald/30 p-4 rounded-lg bg-lush-charcoal/50 mt-4 text-center relative">
            <span className="text-xs absolute -top-2 bg-lush-emerald text-lush-slate font-bold px-2 rounded-full left-1/2 transform -translate-x-1/2 shadow">Optional</span>
            <h4 className="text-lush-emerald font-extrabold text-xl text-center mb-4 mt-2">Visual Audit (Photos/Video)</h4>

            <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleFileChange}
                className="text-xs w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lush-emerald file:text-lush-slate hover:file:bg-lush-emerald cursor-pointer"
            />

            {fileUrlsPreview.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-4">
                    {fileUrlsPreview.map((preview, idx) => (
                        <div key={idx} className="relative aspect-square bg-lush-charcoal rounded-lg border border-gray-600 overflow-hidden group">
                            {preview.file.type.startsWith('video/') ? (
                                <video src={preview.url} className="object-cover w-full h-full" />
                            ) : (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={preview.url} alt={`Preview ${idx}`} className="object-cover w-full h-full" />
                            )}
                            <button
                                type="button"
                                onClick={() => removeFile(preview.file)}
                                className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold transition-colors opacity-0 group-hover:opacity-100"
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <p className="text-[10px] text-gray-500 mt-3 hover:text-gray-400">Uploading helps us quote 50% faster.</p>
            <p className="text-[10px] text-gray-400 mt-1">Note: Photos are stored for 30 days for quote verification.</p>
        </div>
    );
};
