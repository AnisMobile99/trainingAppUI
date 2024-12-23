import React from "react";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import type { Doctor } from "~/utils/doctorsData";
import { doctorsBySpecialty } from "~/utils/doctorsData";

export const loader: LoaderFunction = async ({ params }) => {
  console.log("Params reçus :", params);
  const specialty = params.specialty?.toLowerCase();
  if (!specialty || !doctorsBySpecialty[specialty]) {
    throw new Response("Spécialité non trouvée", { status: 404 });
  }
  return doctorsBySpecialty[specialty];
};

export default function DoctorSpecialtyPage() {
  const doctors = useLoaderData<Doctor[]>();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold">Liste des Médecins</h1>
      {doctors.length > 0 ? (
        <ul className="space-y-4">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="border rounded-md p-4">
              <h2 className="text-xl">{doctor.name}</h2>
              <p>Spécialité : {doctor.specialty}</p>
              <p>Disponibilités :</p>
              <ul className="list-disc pl-5">
                {doctor.availability.map((slot, index) => (
                  <li key={index}>{slot}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun médecin trouvé.</p>
      )}
      <Link to="/" className="text-blue-500 hover:underline">
        Retour à la liste des spécialités
      </Link>
    </div>
  );
}
