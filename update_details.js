const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'site-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const familyNew = `    details: "En nuestra área de Derecho de Familia en Ecuador, brindamos un acompañamiento humano y empático, protegiendo a tu familia y patrimonio. Entendemos que estos procesos pueden ser emocionalmente desgastantes, por lo que nos enfocamos en resoluciones rápidas y justas.\\n\\n" +
      "• Pensión de Alimentos (Cobrar, Fijar, Aumentar o Disminuir): Es un derecho irrenunciable de los hijos (menores o mayores en estudio). Se calcula según ingresos del alimentante, necesidades del alimentado y la tabla de pensiones mínimas. Puedes demandar aumento si cambian las condiciones económicas; el incumplimiento genera embargo o prisión.\\n\\n" +
      "• Divorcio (Mutuo Consentimiento o Causales): El divorcio por mutuo consentimiento es el más rápido, económico y recomendado (notarial o judicial). Si tu cónyuge está en el extranjero, se cita por edictos o consulado sin que deba regresar. Además, la custodia compartida es cada vez más aceptada para el bienestar del menor.\\n\\n" +
      "• Liquidación de Sociedad Conyugal y Partición de Bienes: Durante el matrimonio, los bienes adquiridos son gananciales. Al divorciarse, es vital el inventario detallado y la partición. Los bienes privativos (herencias/donaciones) no entran. No firmes acuerdos privados sin elevarlos a escritura pública, pueden ser impugnados.\\n\\n" +
      "Si buscas un abogado especializado en derecho de familia (Pensión de alimentos, divorcio express, liquidación de bienes) en Quito, Ibarra o Tulcán, agenda una consulta. Evita errores comunes que afecten el futuro de tus hijos y tu patrimonio.",`;

const civilNew = `    details: "Proteger tu propiedad y tus bienes es fundamental. Nuestro equipo civil te ofrece soluciones para bienes, sucesiones y propiedad, manejando desde contratos blindados hasta saneamiento de tierras.\\n\\n" +
      "• Legalización de Bienes Inmuebles: Inscribe tu propiedad en el Registro de la Propiedad para tener seguridad jurídica y evitar problemas con herencias o ventas.\\n\\n" +
      "• Prescripción Adquisitiva de Dominio: Adquiere dominio legal por posesión continua, pacífica y pública (10-15 años). Ideal para regularizar terrenos ocupados por años reuniendo pruebas (testigos, recibos, impuestos) mediante juicio ordinario.\\n\\n" +
      "• Sucesiones y Posesión Efectiva: Declara herederos y realiza la posesión efectiva pronto para evitar que el Estado reclame bienes. Gestionamos inventarios y partición de bienes hereditarios.\\n\\n" +
      "• Elaboración de Testamentos: Otórgalo ante notario para distribuir tus bienes claramente y evitar conflictos familiares.\\n\\n" +
      "Expertos en prescripción adquisitiva de dominio y sucesiones en Ecuador. Regulariza tu propiedad y protege tu herencia con Paredes & Asociados.",`;

const penalNew = `    details: "En materia penal, el tiempo es tu mayor aliado. Asumimos tu representación tanto si eres víctima como si enfrentas una acusación, con estrategias de defensa sólidas y confidenciales.\\n\\n" +
      "• Violencia Intrafamiliar y de Género: Toda acción (física, psicológica, verbal o económica) que cause daño a la mujer o núcleo familiar es un delito, no un problema privado. Denuncia de inmediato; la ley protege a las víctimas con medidas cautelares (alejamiento, custodia) y reparación integral. No esperes a que escale.\\n\\n" +
      "• Contravenciones y Delitos Penales: Muchas situaciones pueden resolverse oportunamente con el principio de oportunidad o conciliación, buscando preservar tu libertad y buen nombre.\\n\\n" +
      "• Tránsito y Accidentes: En delitos culposos por accidentes de tránsito aplica reducción de pena. No admitas responsabilidad sin asesoría legal; documenta todo (fotos, testigos) y solicita reparación.\\n\\n" +
      "• Liberación de Vehículos: Procede cuando no hay flagrancia o tras el pago de multas. Actuamos rápido para evitar depreciación o trámites burocráticos engorrosos.\\n\\n" +
      "Defensa penal especializada en accidentes de tránsito y violencia familiar en Ecuador (Quito, Ibarra, Tulcán). Recupera tu libertad y protege tus derechos.",`;

const adminNew = `    details: "Los servidores públicos enfrentan constantes riesgos de sanciones o destituciones. El sumario administrativo es el procedimiento oral (LOSEP y MDT) para investigar faltas graves, garantizando tu derecho a la defensa y debido proceso.\\n\\n" +
      "• Proceso de Defensa: Al recibir notificación, intervenimos presentando descargos por escrito dentro del plazo (generalmente 10 días). Solicitamos pruebas, testigos y audiencia, e impugnamos pruebas irregulares o sanciones (suspensión/destitución).\\n\\n" +
      "• Principios Clave: Nos basamos en la presunción de inocencia, igualdad y motivación de resoluciones para proteger tu estabilidad laboral ante entidades gubernamentales o municipales.\\n\\n" +
      "No enfrentes solo un sumario administrativo, un abogado experto puede lograr su archivo o sanciones menores. ¿Te notificaron? Defendemos tus derechos como servidor público en todo el Ecuador.",`;

const laborNew = `    details: "Asesoramos tanto a empresas como a trabajadores para el cumplimiento de las obligaciones mutuas (contrato, seguridad social, pago oportuno). La prevención es la mejor inversión laboral.\\n\\n" +
      "• Despido Intempestivo e Ineficaz: El empleador debe pagar indemnización según los años de servicio. No firmes actas de finiquito sin revisión legal, puedes demandar diferencias. Además, defendemos despidos ineficaces (embarazo, dirigentes sindicales, discriminación).\\n\\n" +
      "• Acción por Acoso Laboral: Un solo acto grave puede configurar hostigamiento. Documenta las pruebas y denuncia para exigir indemnización y reparación por daño moral.\\n\\n" +
      "• Cobro de Haberes e Impugnación de Finiquitos: Tienes 3 años para reclamar valores pendientes. Revisamos el cálculo correcto de décimos, vacaciones y fondos de reserva.\\n\\n" +
      "Abogados laborales en Ecuador expertos en despidos, cobro de haberes y acoso. Protege tu fuente de ingresos o tu empresa.",`;


// Family
content = content.replace(
  /details: "En nuestra área de Derecho de Familia.*?\),/s,
  familyNew
);

// Civil
content = content.replace(
  /details: "Proteger tu propiedad y tus bienes es fundamental.*?definitivas.",/s,
  civilNew
);

// Penal
content = content.replace(
  /details: "En materia penal.*?buen nombre.",/s,
  penalNew
);

// Sumarios Admin
content = content.replace(
  /details: "Los servidores públicos enfrentan.*?municipales.",/s,
  adminNew
);

// Laboral
content = content.replace(
  /details: "Asesoramos tanto a empresas.*?inversión laboral.",/s,
  laborNew
);

fs.writeFileSync(filePath, content);
console.log("Updated site-data.ts successfully");
