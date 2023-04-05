import React from "react";
import { Navbar } from "../../ui";
import { MarvelPage, DCPage, SearchPage, HeroPage } from "../../heroes";
import { Route, Routes, Navigate } from "react-router-dom";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DCPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero" element={<HeroPage />} />

          <Route path="*" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
