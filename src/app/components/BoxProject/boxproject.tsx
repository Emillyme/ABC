import Image from "next/image";
import logo from "/public/Logo.svg";
import Link from "next/link";

export default function BoxProject() {
  return (
    <>
      <main className="p-8">
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className={`bg-purple-400 h-36`}></div>
            <div className="p-4">
              <h3 className="text-xl font-medium">Projeto 1</h3>
              <p className="text-slate-600 mb-3">GS/OIS-LA</p>
              <p className="text-slate-400">
                01/10/23 | 07 AM - 08 PM
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
